import { Injectable } from '@nestjs/common';
import { Client } from 'dwolla-v2';
import { OmitRegisterDto } from './auth/dto';
import { getDwollaEnv } from './constants';
import { throwError } from './constants';

@Injectable()
export class DwollaService {
  private readonly dwollaClient;
  constructor() {
    this.dwollaClient = new Client({
      environment: getDwollaEnv(process.env.DWOLLA_ENV),
      key: process.env.DWOLLA_KEY,
      secret: process.env.DWOLLA_SECRET,
    });
  }

  private async createOnDemandAuthorization() {
    try {
      const onDemandAuthorization = await this.dwollaClient.post(
        `on-demand-authorizations`,
      );
      return onDemandAuthorization.body._links;
    } catch (error) {
      throwError(error, 'Creating on demand authorization failed');
    }
  }

  private async createFundingSource(options: CreateFundingSourceOptions) {
    try {
      return await this.dwollaClient
        .post(`customers/${options.customerId}/funding-sources`, {
          name: options.fundingSourceName,
          plaidToken: options.plaidToken,
        })
        .then((res) => res.headers.get('location'));
    } catch (error) {
      throwError(error, 'Creating funding source failed');
    }
  }

  async createDwollaCustomer(newCustomer: OmitRegisterDto & { type: string }) {
    try {
      return await this.dwollaClient
        .post(`customers`, {
          ...newCustomer,
          postalCode: newCustomer.postalCode.toString(),
          dateOfBirth: newCustomer.dateOfBirth.toISOString(),
          ssn: newCustomer.ssn.toString(),
        })
        .then((res) => res.headers.get('location'));
    } catch (error) {
      throwError(error, 'Creating funding source failed');
    }
  }

  extractCustomerIdFromCustomerUrl(url: string) {
    // Split the URL string by '/'
    const parts = url.split('/');

    // Extract the last part, which represents the customer ID
    const customerId = parts[parts.length - 1];
    return customerId;
  }

  async createTransfer(transfer: TransferParams) {
    try {
      const requestBody = {
        _links: {
          source: { href: transfer.sourceFundingSourceUrl },
          destination: { href: transfer.destinationFundingSourceUrl },
        },
        amount: { currency: transfer.currency, value: transfer.amount },
      };
      return await this.dwollaClient
        .post('transfers', requestBody)
        .then((res) => res.headers.get('location'));
    } catch (error) {
      throwError(error, 'Creating transfer failed');
    }
  }

  async addFundingSource(options: AddFundingSourceOptions) {
    try {
      const dwollaAuthLinks = await this.createOnDemandAuthorization();

      // add funding source to the dwolla customer & get the funding source url
      return await this.createFundingSource({
        customerId: options.dwollaCustomerId,
        fundingSourceName: options.bankName,
        plaidToken: options.processorToken,
        _links: dwollaAuthLinks,
      });
    } catch (error) {
      throwError(error, 'Adding funding source failed');
    }
  }
}
