import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import {
  Configuration,
  CountryCode,
  PlaidApi,
  PlaidEnvironments,
  ProcessorTokenCreateRequestProcessorEnum,
  Products,
} from 'plaid';
import { DwollaService } from 'src/dwolla.service';
import { ExchangePublicTokenDto } from './dto';
import { PrismaService } from 'src/prisma.service';
import { throwError } from 'src/constants';

@Injectable()
export class PlaidService {
  public readonly plaidClient: PlaidApi;

  constructor(
    public readonly dwollaService: DwollaService,
    private readonly prismaService: PrismaService,
  ) {
    const configuration = new Configuration({
      basePath: PlaidEnvironments[process.env.PLAID_ENV],
      baseOptions: {
        headers: {
          'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
          'PLAID-SECRET': process.env.PLAID_SECRET,
        },
      },
    });

    this.plaidClient = new PlaidApi(configuration);
  }

  async createLinkToken(req: Request) {
    try {
      const userId = req.user?.userId;
      const tokenParams = {
        user: {
          client_user_id: userId,
        },
        client_name: `Banking App`,
        products: ['auth', 'transactions', 'identity'] as Products[],
        language: 'en',
        country_codes: ['US', 'CA'] as CountryCode[],
        // webhook: 'https://webhook.example.com',
      };

      const response = await this.plaidClient.linkTokenCreate(tokenParams);
      return { linkToken: response.data.link_token };
    } catch (error) {
      throwError(error, 'Failed to create link token');
    }
  }

  async exchangePublicToken(
    exchangePublicTokenDto: ExchangePublicTokenDto,
    req: Request,
  ) {
    const user = req.user;
    if (user.userId !== exchangePublicTokenDto.userId) {
      throw new UnauthorizedException('User not authorized');
    }

    try {
      const response = await this.plaidClient.itemPublicTokenExchange({
        public_token: exchangePublicTokenDto.publicToken,
      });

      const plaidAccessToken = response.data.access_token;

      // get account info from plaid using the access token
      const accountResponse = await this.plaidClient.accountsGet({
        access_token: plaidAccessToken,
      });

      const accountData = accountResponse.data.accounts[0];

      // create a processor token for Dwolla using the access token and account Id
      const processorTokenResponse =
        await this.plaidClient.processorTokenCreate({
          access_token: plaidAccessToken,
          account_id: accountData.account_id,
          processor: 'dwolla' as ProcessorTokenCreateRequestProcessorEnum,
        });

      const processorToken = processorTokenResponse.data.processor_token;

      // Create a funding source URL for the account using the Dwolla customer ID, processor token, and bank name
      const fundingSourceUrl = await this.dwollaService.addFundingSource({
        dwollaCustomerId: exchangePublicTokenDto.dwollaCustomerId,
        processorToken,
        bankName: accountData.name,
      });

      if (!fundingSourceUrl) throw new InternalServerErrorException();

      // create a bank account in the database
      await this.prismaService.bank.create({
        data: {
          accountId: accountData.account_id,
          user: { connect: { id: user.userId } },
          accessToken: plaidAccessToken,
          fundingSourceUrl,
          shareableId: btoa(accountData.account_id),
        },
      });

      return 'success';
    } catch (error) {
      throwError(error, 'Failed to exchange public token');
    }
  }
}
