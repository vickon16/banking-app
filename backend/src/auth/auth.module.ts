import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma.service';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { RedisService } from 'src/redis.service';
import { DwollaService } from 'src/dwolla.service';

@Module({
  providers: [
    AuthResolver,
    AuthService,
    PrismaService,
    JwtService,
    RedisService,
    DwollaService,
  ],
  exports: [AuthService],
})
export class AuthModule {}
