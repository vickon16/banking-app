import { Module } from '@nestjs/common';
import { PlaidModule } from 'src/plaid/plaid.module';
import { PrismaService } from 'src/prisma.service';
import { TransactionResolver } from './transaction.resolver';
import { TransactionService } from './transaction.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [PlaidModule, AuthModule],
  providers: [TransactionResolver, TransactionService, PrismaService],
  exports: [TransactionService],
})
export class TransactionModule {}
