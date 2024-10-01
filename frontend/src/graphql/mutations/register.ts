import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation registerUser(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $address1: String!
    $city: String!
    $state: String!
    $postalCode: Float!
    $dateOfBirth: DateTime!
    $ssn: Float!
  ) {
    register(
      registerInput: {
        email: $email
        password: $password
        firstName: $firstName
        lastName: $lastName
        address1: $address1
        city: $city
        state: $state
        postalCode: $postalCode
        dateOfBirth: $dateOfBirth
        ssn: $ssn
      }
    ) {
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
