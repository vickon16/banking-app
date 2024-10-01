import { gql } from "@apollo/client";

export const CREATE_LINK_TOKEN = gql`
  mutation createLinkToken {
    createLinkToken {
      linkToken
    }
  }
`;
