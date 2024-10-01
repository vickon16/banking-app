import { Field, ObjectType } from '@nestjs/graphql';
import { user } from '@prisma/client';
import { Bank } from 'src/bank/bank.type';

type OmitPrismaUser = Partial<Omit<user, 'password'>>;

@ObjectType()
export class User implements OmitPrismaUser {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  address1?: string;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  state?: string;

  @Field({ nullable: true })
  postalCode?: number;

  @Field({ nullable: true })
  dateOfBirth?: Date;

  @Field({ nullable: true })
  ssn?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  dwollaCustomerUrl?: string;

  @Field({ nullable: true })
  dwollaCustomerId?: string;

  @Field(() => [Bank], { nullable: true })
  banks?: Bank[];
}
