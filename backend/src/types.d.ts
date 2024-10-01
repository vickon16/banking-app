declare type RequestUser = {
  email: string;
  userId: string;
};

declare namespace Express {
  export interface Request {
    user?: RequestUser;
  }
}

declare interface CreateFundingSourceOptions {
  customerId: string; // Dwolla Customer ID
  fundingSourceName: string; // Dwolla Funding Source Name
  plaidToken: string; // Plaid Account Processor Token
  _links: object; // Dwolla On Demand Authorization Link
}

declare interface AddFundingSourceOptions {
  dwollaCustomerId: string;
  processorToken: string;
  bankName: string;
}

declare interface TransferParams {
  sourceFundingSourceUrl: string;
  destinationFundingSourceUrl: string;
  amount: number;
  currency: 'USD';
}
