import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { PlaidModule } from 'src/plaid/plaid.module';
import { PrismaService } from 'src/prisma.service';
import { TransactionModule } from 'src/transaction/transaction.module';
import { BankResolver } from './bank.resolver';
import { BankService } from './bank.service';

@Module({
  imports: [AuthModule, PlaidModule, TransactionModule],
  providers: [BankResolver, BankService, PrismaService],
})
export class BankModule {}
