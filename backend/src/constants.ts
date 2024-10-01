import {
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

export const getDwollaEnv = (env: string): 'production' | 'sandbox' => {
  switch (env) {
    case 'production':
      return 'production';
    case 'sandbox':
      return 'sandbox';
    default:
      return 'sandbox';
  }
};

export const throwError = (error: unknown, message?: string) => {
  console.log(error);
  if (error instanceof Error) {
    throw new InternalServerErrorException(error.message);
  }

  if (error instanceof UnauthorizedException) {
    throw new UnauthorizedException(error);
  }

  if (error instanceof NotFoundException) {
    throw new NotFoundException(error);
  }

  if (error instanceof BadRequestException) {
    throw new BadRequestException(error);
  }

  if (error instanceof InternalServerErrorException) {
    throw new InternalServerErrorException(error);
  }

  throw new InternalServerErrorException(message || 'Something went wrong');
};
