import { gql } from "@apollo/client";

export const GET_BANK_ACCOUNTS_FROM_PLAID = gql`
  query GetBankAccountsFromPlaid {
    getBankAccountsFromPlaid {
      bankAccountsFromPlaid {
        id
        bankId
        bank {
          id
          accountId
          accessToken
          fundingSourceUrl
          userId
          shareableId
        }
        shareableId
        institutionId
        name
        officialName
        availableBalance
        currentBalance
        mask
        type
        subType
      }
      totalBankAccounts
      totalCurrentBalance
    }
  }
`;
