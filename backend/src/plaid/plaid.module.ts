import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { PlaidResolver } from './plaid.resolver';
import { PlaidService } from './plaid.service';
import { DwollaService } from 'src/dwolla.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [AuthModule],
  providers: [PlaidService, PlaidResolver, DwollaService, PrismaService],
  exports: [PlaidService],
})
export class PlaidModule {}
