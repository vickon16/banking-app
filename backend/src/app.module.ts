import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import * as Joi from 'joi';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { LoggerModule } from 'nestjs-pino';
import { PlaidModule } from './plaid/plaid.module';
import { BankModule } from './bank/bank.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        DATABASE_URL: Joi.string().required(),
        REFRESH_TOKEN_SECRET: Joi.string().required(),
        ACCESS_TOKEN_SECRET: Joi.string().required(),
        SERVER_URL: Joi.string().required(),
        CLIENT_URL: Joi.string().required(),
        PLAID_CLIENT_ID: Joi.string().required(),
        PLAID_SECRET: Joi.string().required(),
        PLAID_ENV: Joi.string().required(),
        PLAID_PRODUCTS: Joi.string().required(),
        PLAID_COUNTRY_CODES: Joi.string().required(),
        DWOLLA_KEY: Joi.string().required(),
        DWOLLA_SECRET: Joi.string().required(),
        DWOLLA_BASE_URL: Joi.string().required(),
        DWOLLA_ENV: Joi.string().required(),
      }),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver,
      sortSchema: true,
      context: ({ req, res }) => ({ req, res }), // for cookies access
    }),
    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const isProduction = configService.get('NODE_ENV') === 'production';

        return {
          pinoHttp: {
            transport: isProduction
              ? undefined
              : {
                  target: 'pino-pretty',
                  options: { singleLine: true },
                },
            level: isProduction ? 'info' : 'debug',
          },
        };
      },
    }),
    AuthModule,
    UserModule,
    PlaidModule,
    BankModule,
    TransactionModule,
  ],
})
export class AppModule {}
