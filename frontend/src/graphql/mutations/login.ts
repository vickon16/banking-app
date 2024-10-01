import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(loginInput: { email: $email, password: $password }) {
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
