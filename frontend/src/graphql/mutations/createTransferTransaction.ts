import { gql } from "@apollo/client";

export const CREATE_TRANSFER_TRANSACTION = gql`
  mutation CreateTransferTransaction(
    $name: String!
    $email: String!
    $amount: Float!
    $senderBankId: String!
    $shareableId: String!
  ) {
    createTransferTransaction(
      createTransferTransactionInput: {
        name: $name
        email: $email
        amount: $amount
        senderBankId: $senderBankId
        shareableId: $shareableId
      }
    )
  }
`;
