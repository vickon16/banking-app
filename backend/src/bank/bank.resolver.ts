import { UseGuards } from '@nestjs/common';
import { Context, Resolver, Query, Args } from '@nestjs/graphql';
import { AuthGuard } from 'src/auth/auth.guard';
import {
  Bank,
  GetBankAccountFromPlaidResponse,
  GetBankAccountsFromPlaidResponse,
} from './bank.type';
import { BankService } from './bank.service';
import { Request } from 'express';

@UseGuards(AuthGuard)
@Resolver()
export class BankResolver {
  constructor(private readonly bankService: BankService) {}

  @Query(() => [Bank])
  async getBanks(@Context() ctx: { req: Request }) {
    return this.bankService.getBanks(ctx.req);
  }

  @Query(() => Bank)
  async getBank(
    @Args('bankId') bankId: string,
    @Args('accountId') accountId?: string,
  ) {
    return this.bankService.getBank(bankId, accountId);
  }

  @Query(() => GetBankAccountsFromPlaidResponse)
  async getBankAccountsFromPlaid(@Context() ctx: { req: Request }) {
    return this.bankService.getBankAccountsFromPlaid(ctx.req);
  }

  @Query(() => GetBankAccountFromPlaidResponse)
  async getBankAccountFromPlaid(@Args('bankId') bankId: string) {
    return this.bankService.getBankAccountFromPlaid(bankId);
  }
}
