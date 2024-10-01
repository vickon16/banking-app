import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';
import { Response, Request } from 'express';
import { User } from 'src/user/user.type';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => User)
  async register(
    @Args('registerInput') registerDto: RegisterDto,
    @Context() ctx: { res: Response },
  ) {
    return await this.authService.register(registerDto, ctx.res);
  }

  @Mutation(() => User)
  async login(
    @Args('loginInput') loginDto: LoginDto,
    @Context() ctx: { res: Response },
  ) {
    return await this.authService.login(loginDto, ctx.res);
  }

  @Mutation(() => String)
  async logout(@Context() context: { req: Request; res: Response }) {
    return await this.authService.logout(context.req, context.res);
  }

  @Query(() => User, { nullable: true })
  async getLoggedInUser(@Context() ctx: { req: Request; res: Response }) {
    return await this.authService.getLoggedInUser(ctx.req, ctx.res);
  }
}
