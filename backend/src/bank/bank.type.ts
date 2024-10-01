import { Field, ObjectType } from '@nestjs/graphql';
import { bank } from '@prisma/client';
import { Transaction } from 'src/transaction/transaction.type';
import { User } from 'src/user/user.type';

type OmitPrismaBank = Partial<Omit<bank, never>>;

@ObjectType()
export class Bank implements OmitPrismaBank {
  @Field()
  id: string;

  @Field()
  accountId: string;

  @Field()
  userId: string;

  @Field({ nullable: true })
  accessToken?: string;

  @Field({ nullable: true })
  fundingSourceUrl?: string;

  @Field({ nullable: true })
  shareableId?: string;

  @Field(() => User, { nullable: true })
  user?: User;
}

@ObjectType()
export class BankAccount {
  @Field()
  id: string;

  @Field()
  bankId: string;

  @Field()
  shareableId: string;

  @Field()
  institutionId: string;

  @Field()
  name: string;

  @Field()
  officialName: string;

  @Field({ nullable: true })
  availableBalance?: number;

  @Field({ nullable: true })
  currentBalance?: number;

  @Field({ nullable: true })
  mask?: string;

  @Field({ nullable: true })
  type?: string;

  @Field({ nullable: true })
  subType?: string;

  @Field(() => Bank, { nullable: true })
  bank?: Bank;
}

@ObjectType()
export class GetBankAccountsFromPlaidResponse {
  @Field(() => [BankAccount])
  bankAccountsFromPlaid: BankAccount[];

  @Field()
  totalBankAccounts: number;

  @Field()
  totalCurrentBalance: number;
}

@ObjectType()
export class GetBankAccountFromPlaidResponse {
  @Field(() => BankAccount)
  bankAccountFromPlaid: BankAccount;

  @Field(() => [Transaction])
  transactions: Transaction[];
}
