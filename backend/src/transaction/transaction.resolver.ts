import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { TransactionService } from './transaction.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { TransferTransactionDto } from './dto';

@UseGuards(AuthGuard)
@Resolver()
export class TransactionResolver {
  constructor(private readonly transactionService: TransactionService) {}

  @Mutation(() => String)
  async createTransferTransaction(
    @Args('createTransferTransactionInput') input: TransferTransactionDto,
  ) {
    await this.transactionService.createTransferTransaction(input);
    return 'success';
  }
}
