import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { user } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { throwError } from 'src/constants';
import { DwollaService } from 'src/dwolla.service';
import { PrismaService } from 'src/prisma.service';
import { RedisService } from 'src/redis.service';
import { LoginDto, RegisterDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly db: PrismaService,
    private readonly redis: RedisService,
    private readonly dwollaService: DwollaService,
  ) {}

  private async issueTokens(
    user: user,
    response: Response,
    onlyAccessToken?: boolean,
  ) {
    const payload: RequestUser = { userId: user.id, email: user.email };

    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.ACCESS_TOKEN_SECRET,
      expiresIn: '90sec',
    });

    response.cookie('access_token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    });

    if (!onlyAccessToken) {
      const refreshToken = this.jwtService.sign(payload, {
        secret: process.env.REFRESH_TOKEN_SECRET,
        expiresIn: '7d',
      });

      await this.redis.redisClient.set(user.id, JSON.stringify(refreshToken));
    }

    return user;
  }

  async register(registerDto: RegisterDto, response: Response) {
    try {
      const existingUser = await this.db.user.findUnique({
        where: { email: registerDto.email },
      });

      if (existingUser) throw new BadRequestException('User already exists');

      const hashedPassword = await bcrypt.hash(registerDto.password, 10);

      const newData: RegisterDto = {
        ...registerDto,
        password: hashedPassword,
        dateOfBirth: new Date(registerDto.dateOfBirth),
      };

      const dwollaCustomerUrl = await this.dwollaService.createDwollaCustomer({
        ...newData,
        type: 'personal',
      });

      if (!dwollaCustomerUrl)
        throw new InternalServerErrorException(
          "Couldn't create Dwolla customer",
        );

      const dwollaCustomerId =
        this.dwollaService.extractCustomerIdFromCustomerUrl(dwollaCustomerUrl);

      const user = await this.db.user.create({
        data: { ...newData, dwollaCustomerId, dwollaCustomerUrl },
      });

      return this.issueTokens(user, response);
    } catch (error) {
      throwError(error, "Couldn't create user");
    }
  }

  async login(loginDto: LoginDto, response: Response) {
    try {
      const user = await this.db.user.findUnique({
        where: { email: loginDto.email },
      });

      if (!user) {
        throw new BadRequestException('Invalid credentials');
      }

      if (!(await bcrypt.compare(loginDto.password, user.password))) {
        throw new BadRequestException('Invalid credentials');
      }

      return this.issueTokens(user, response);
    } catch (error) {
      throwError(error, "Couldn't login user");
    }
  }

  async logout(req: Request, response: Response) {
    try {
      const newAccessPayload = this.verifyToken(
        'access',
        req.cookies?.access_token,
      );
      const userId = newAccessPayload?.userId;

      response.clearCookie('access_token');
      if (userId) await this.redis.redisClient.del(userId);
      return 'Successfully logged out';
    } catch (error) {
      throwError(error, "Couldn't logout user");
    }
  }

  async getLoggedInUser(req: Request, res: Response) {
    const token = await this.generateToken(req);
    if (!token) return null;

    try {
      const user = await this.db.user.findUnique({
        where: { id: token.userId },
      });

      if (!user) return null;
      return this.issueTokens(user, res, true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      return null;
    }
  }

  async generateToken(req: Request) {
    const prevAccessToken = req.cookies?.access_token;
    if (!prevAccessToken) return null;

    try {
      const newAccessPayload = this.verifyToken('access', prevAccessToken);
      // if the access token is invalid, check if refresh token is valid
      if (!newAccessPayload) {
        // decode the access token
        const decodedPrevAccessPayload =
          this.jwtService.decode(prevAccessToken);
        const prevRefreshToken = await this.redis.redisClient.get(
          decodedPrevAccessPayload.userId,
        );

        const newRefreshPayload = this.verifyToken(
          'refresh',
          JSON.parse(prevRefreshToken),
        );
        if (!newRefreshPayload) return null;
        return newRefreshPayload;
      }

      return newAccessPayload;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      return null;
    }
  }

  private verifyToken(type: 'access' | 'refresh', token: string) {
    try {
      const payload = this.jwtService.verify(token, {
        secret:
          type === 'access'
            ? process.env.ACCESS_TOKEN_SECRET
            : process.env.REFRESH_TOKEN_SECRET,
      });
      return payload as RequestUser;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return null;
    }
  }
}
