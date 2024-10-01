import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { transaction, TransactionType } from '@prisma/client';
import { Bank } from 'src/bank/bank.type';
import { User } from 'src/user/user.type';

type OmitPrismaTransaction = Partial<Omit<transaction, never>>;

registerEnumType(TransactionType, {
  name: 'TransactionType', // this is the name of the enum in the GraphQL schema
  description: 'transaction type can either be debit or credit', // Optional description
});

@ObjectType()
export class Transaction implements OmitPrismaTransaction {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  paymentChannel: string;

  @Field(() => TransactionType)
  type: TransactionType;

  @Field()
  pending: boolean;

  @Field()
  amount: number;

  @Field()
  accountId: string;

  @Field({ nullable: true })
  category?: string;

  @Field({ nullable: true })
  image?: string;

  @Field({ nullable: true })
  senderId?: string;

  @Field({ nullable: true })
  receiverId?: string;

  @Field(() => User, { nullable: true })
  sender?: User;

  @Field(() => User, { nullable: true })
  receiver?: User;

  @Field({ nullable: true })
  senderBankId?: string;

  @Field(() => Bank, { nullable: true })
  senderBank?: Bank;

  @Field({ nullable: true })
  receiverBankId?: string;

  @Field(() => Bank, { nullable: true })
  receiverBank?: Bank;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
