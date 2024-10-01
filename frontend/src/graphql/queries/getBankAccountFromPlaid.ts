import { gql } from "@apollo/client";

export const GET_BANK_ACCOUNT_FROM_PLAID = gql`
  query GetBankAccountFromPlaid($bankId: String!) {
    getBankAccountFromPlaid(bankId: $bankId) {
      bankAccountFromPlaid {
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
      transactions {
        id
        name
        paymentChannel
        type
        accountId
        pending
        amount
        category
        image
        senderBankId
        senderBank {
          id
          accountId
          accessToken
          fundingSourceUrl
          userId
          shareableId
        }
        receiverBankId
        receiverBank {
          id
          accountId
          accessToken
          fundingSourceUrl
          userId
          shareableId
        }
        createdAt
      }
    }
  }
`;
