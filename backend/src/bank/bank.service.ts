import { Injectable, NotFoundException } from '@nestjs/common';
import { bank } from '@prisma/client';
import { Request } from 'express';
import { CountryCode } from 'plaid';
import { throwError } from 'src/constants';
import { PlaidService } from 'src/plaid/plaid.service';
import { PrismaService } from 'src/prisma.service';
import { TransactionService } from 'src/transaction/transaction.service';
import { BankAccount } from './bank.type';

@Injectable()
export class BankService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly plaidService: PlaidService,
    private readonly transactionService: TransactionService,
  ) {}

  async getBanks(req: Request) {
    const userId = req.user?.userId;
    try {
      const banks = await this.prismaService.bank.findMany({
        where: { userId },
      });

      return banks;
    } catch (error) {
      throwError(error, 'Failed to get Banks');
    }
  }

  async getBank(bankId: string, accountId?: string) {
    let bank: bank;
    try {
      if (!!accountId) {
        bank = await this.prismaService.bank.findFirst({
          where: { accountId },
        });
      } else {
        bank = await this.prismaService.bank.findUnique({
          where: { id: bankId },
        });
      }

      if (!bank) throw new NotFoundException('Bank not found');
      return bank;
    } catch (error) {
      throwError(error, 'Failed to get Bank');
    }
  }

  private async getInstitution(institutionId: string) {
    try {
      const institutionResponse =
        await this.plaidService.plaidClient.institutionsGetById({
          institution_id: institutionId,
          country_codes: ['US', 'CA'] as CountryCode[],
        });

      return institutionResponse.data.institution;
    } catch (error) {
      throwError(error, 'Failed to get institution');
    }
  }

  async getBankAccountsFromPlaid(req: Request) {
    const userId = req.user?.userId;
    try {
      const banks = await this.prismaService.bank.findMany({
        where: { userId },
      });

      const accounts = await Promise.all(
        banks.map(async (bank) => {
          const accountResponse =
            await this.plaidService.plaidClient.accountsGet({
              access_token: bank.accessToken,
            });

          const accountData = accountResponse.data.accounts[0];
          const institution = await this.getInstitution(
            accountResponse.data.item.institution_id,
          );

          return {
            id: accountData.account_id,
            bankId: bank.id,
            bank,
            shareableId: bank.shareableId,
            institutionId: institution.institution_id,
            name: accountData.name,
            officialName: accountData.official_name,
            availableBalance: accountData.balances.available,
            currentBalance: accountData.balances.current,
            mask: accountData.mask,
            type: accountData.type,
            subType: accountData.subtype,
          } satisfies Omit<BankAccount, never>;
        }),
      );

      const totalBankAccounts = accounts.length;
      const totalCurrentBalance = accounts.reduce((total, account) => {
        return total + account.currentBalance;
      }, 0);

      return {
        bankAccountsFromPlaid: accounts,
        totalBankAccounts,
        totalCurrentBalance,
      };
    } catch (error) {
      throwError(error, 'Failed to get Bank accounts from plaid');
    }
  }

  async getBankAccountFromPlaid(bankId: string) {
    try {
      const bank = await this.prismaService.bank.findUnique({
        where: { id: bankId },
      });

      if (!bank) throw new NotFoundException('Bank not found');

      const accountResponse = await this.plaidService.plaidClient.accountsGet({
        access_token: bank.accessToken,
      });

      if (!accountResponse.data.accounts.length)
        throw new NotFoundException('Bank account data not found');

      const accountData = accountResponse.data.accounts[0];

      const institution = await this.getInstitution(
        accountResponse.data.item.institution_id,
      );

      if (!institution)
        throw new NotFoundException('Bank institution data not found');

      const transactionData =
        await this.transactionService.getTransactionsByBankId(bank.id);

      const plaidTransactions = await this.transactionService.getTransactions(
        bank.accessToken,
      );

      const account = {
        id: accountData.account_id,
        bankId: bank.id,
        shareableId: bank.shareableId,
        institutionId: institution.institution_id,
        name: accountData.name,
        officialName: accountData.official_name,
        availableBalance: accountData.balances.available,
        currentBalance: accountData.balances.current,
        mask: accountData.mask,
        type: accountData.type,
        subType: accountData.subtype,
      } satisfies Omit<BankAccount, never>;

      const allTransactions = plaidTransactions
        .concat(transactionData)
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );

      return {
        bankAccountFromPlaid: account,
        transactions: allTransactions,
      };
    } catch (error) {
      throwError(error, 'Failed to get Bank accounts from plaid');
    }
  }
}
