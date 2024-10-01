import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

@InputType()
export class TransferTransactionDto {
  @Field()
  @IsNotEmpty({ message: 'Name is required.' })
  @IsString()
  name: string;

  @Field()
  @IsNotEmpty({ message: 'Email is required.' })
  @IsEmail({}, { message: 'Email must be valid.' })
  email: string;

  @Field()
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @Field()
  @IsNotEmpty({ message: 'SenderBank is required.' })
  @IsString()
  senderBankId: string;

  @Field()
  @IsNotEmpty({ message: 'ShareableId is required.' })
  @IsString()
  @MinLength(8, { message: 'ShareableId must be at least 8 characters.' })
  shareableId: string;
}
