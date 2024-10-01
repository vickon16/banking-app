import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  // IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

type OmitPrismaUser = Omit<
  Prisma.userCreateInput,
  'dwollaCustomerUrl' | 'dwollaCustomerId'
>;

@InputType()
export class RegisterDto implements OmitPrismaUser {
  @Field()
  @IsNotEmpty({ message: 'Email is required.' })
  @IsEmail({}, { message: 'Email must be valid.' })
  email: string;

  @Field()
  @IsNotEmpty({ message: 'Password is required.' })
  @MinLength(8, { message: 'Password must be at least 8 characters.' })
  password: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  address1: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  city: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  state: string;

  @Field()
  @IsNotEmpty()
  @IsNumber()
  postalCode: number;

  @Field()
  @IsNotEmpty()
  @IsDate({ message: 'Date of birth must be a valid date' })
  dateOfBirth: Date;

  @Field()
  @IsNotEmpty()
  @IsNumber()
  ssn: number;
}

export type OmitRegisterDto = Omit<RegisterDto, never>;

@InputType()
export class LoginDto {
  @Field()
  @IsNotEmpty({ message: 'Email is required.' })
  @IsEmail({}, { message: 'Email must be valid.' })
  email: string;

  @Field()
  @IsNotEmpty({ message: 'Password is required.' })
  password: string;
}
