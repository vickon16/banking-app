import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const gqlContext = context.getArgByIndex(2);
    const request: Request = gqlContext.req;
    const token = await this.authService.generateToken(request);
    if (!token) throw new UnauthorizedException();
    request['user'] = token;
    return true;
  }
}
