import { gql } from "@apollo/client";

export const EXCHANGE_PUBLIC_TOKEN = gql`
  mutation ExchangePublicToken(
    $publicToken: String!
    $userId: String!
    $dwollaCustomerId: String!
  ) {
    exchangePublicToken(
      exchangePublicTokenInput: {
        publicToken: $publicToken
        userId: $userId
        dwollaCustomerId: $dwollaCustomerId
      }
    )
  }
`;
