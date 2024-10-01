import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class ExchangePublicTokenDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  publicToken: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  userId: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  dwollaCustomerId: string;
}
