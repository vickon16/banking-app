import { gql } from "@apollo/client";

export const GET_LOGGED_IN_USER = gql`
  query GetLoggedInUser {
    getLoggedInUser {
      id
      email
      firstName
      lastName
      address1
      city
      state
      postalCode
      dateOfBirth
      ssn
      dwollaCustomerUrl
      dwollaCustomerId
    }
  }
`;
