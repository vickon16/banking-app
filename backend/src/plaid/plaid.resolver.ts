import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { Request } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';
import { PlaidService } from './plaid.service';
import { CreateLinkTokenResponse } from './plaid.type';
import { ExchangePublicTokenDto } from './dto';

@UseGuards(AuthGuard)
@Resolver()
export class PlaidResolver {
  constructor(private readonly plaidService: PlaidService) {}

  @Mutation(() => CreateLinkTokenResponse)
  async createLinkToken(@Context() ctx: { req: Request }) {
    return await this.plaidService.createLinkToken(ctx.req);
  }

  @Mutation(() => String)
  async exchangePublicToken(
    @Args('exchangePublicTokenInput')
    exchangePublicTokenDto: ExchangePublicTokenDto,
    @Context() ctx: { req: Request },
  ) {
    return await this.plaidService.exchangePublicToken(
      exchangePublicTokenDto,
      ctx.req,
    );
  }
}
