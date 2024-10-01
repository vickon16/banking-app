import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { throwError } from 'src/constants';
import { PlaidService } from 'src/plaid/plaid.service';
import { PrismaService } from 'src/prisma.service';
import { TransferTransactionDto } from './dto';
import { Transaction } from './transaction.type';
import { TransactionType } from '@prisma/client';

@Injectable()
export class TransactionService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly plaidService: PlaidService,
  ) {}

  async getTransactionsByBankId(bankId: string) {
    try {
      const transactions = await this.prismaService.transaction.findMany({
        where: { OR: [{ senderBankId: bankId }, { receiverBankId: bankId }] },
      });

      return transactions.map((transaction) => ({
        ...transaction,
        type: (transaction.senderBankId === bankId
          ? 'debit'
          : 'credit') as TransactionType,
      }));
    } catch (error) {
      throwError(error, 'Failed to get transactions');
    }
  }

  async getTransactions(accessToken: string) {
    let hasMore = true;
    let transactions: Omit<Transaction, never>[] = [];

    try {
      while (hasMore) {
        const response = await this.plaidService.plaidClient.transactionsSync({
          access_token: accessToken,
        });

        transactions = response.data.added.map(
          (transaction) =>
            ({
              id: transaction.transaction_id,
              name: transaction.name,
              paymentChannel: transaction.payment_channel,
              type: 'none',
              accountId: transaction.account_id,
              amount: transaction.amount,
              pending: transaction.pending,
              category: transaction?.category?.length
                ? transaction.category[0]
                : 'no-category',
              createdAt: new Date(transaction.date),
              image: transaction.logo_url,
            }) satisfies Omit<Transaction, never>,
        );

        hasMore = response.data.has_more;
      }

      return transactions;
    } catch (error) {
      throwError(error, 'Failed to get transactions');
    }
  }

  async createTransferTransaction(input: TransferTransactionDto) {
    try {
      // decrypt the shareableId
      const receiverAccountId = atob(input.shareableId);
      const receiverBank = await this.prismaService.bank.findFirst({
        where: { accountId: receiverAccountId, user: { email: input.email } },
      });

      if (!receiverBank) {
        throw new BadRequestException('Receiver bank not found');
      }

      const senderBank = await this.prismaService.bank.findFirst({
        where: { id: input.senderBankId },
      });

      if (!senderBank) {
        throw new BadRequestException('Sender bank not found');
      }

      if (
        receiverBank.accountId === senderBank.accountId ||
        receiverBank.id === senderBank.id
      ) {
        throw new BadRequestException(
          'Sender and receiver banks cannot be the same',
        );
      }

      // check if the amount is less than the current balance
      const accountResponse = await this.plaidService.plaidClient.accountsGet({
        access_token: senderBank.accessToken,
      });

      if (!accountResponse.data.accounts.length)
        throw new NotFoundException('Bank account data not found');

      const accountData = accountResponse.data.accounts[0];

      if (accountData.balances.current < input.amount) {
        throw new BadRequestException('Insufficient funds');
      }

      // create a transfer between the sender and receiver banks
      const transfer = await this.plaidService.dwollaService.createTransfer({
        sourceFundingSourceUrl: senderBank.fundingSourceUrl,
        destinationFundingSourceUrl: receiverBank.fundingSourceUrl,
        currency: 'USD',
        amount: input.amount,
      });

      if (!transfer) {
        throw new InternalServerErrorException('Transfer failed');
      }

      // record the transaction
      await this.prismaService.transaction.create({
        data: {
          name: input.name,
          amount: input.amount,
          paymentChannel: 'online',
          category: 'Transfer',
          senderId: senderBank.userId,
          receiverId: receiverBank.userId,
          senderBankId: senderBank.id,
          receiverBankId: receiverBank.id,
          accountId: senderBank.accountId,
          pending: true,
          type: 'debit',
        },
      });
    } catch (error) {
      if (error instanceof DOMException) {
        throw new BadRequestException('Invalid shareableId');
      }
      throwError(error, 'Failed to create transfer transaction');
    }
  }
}
