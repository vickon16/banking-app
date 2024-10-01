/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation LogoutUser {\n    logout\n  }\n": types.LogoutUserDocument,
    "\n  mutation createLinkToken {\n    createLinkToken {\n      linkToken\n    }\n  }\n": types.CreateLinkTokenDocument,
    "\n  mutation CreateTransferTransaction(\n    $name: String!\n    $email: String!\n    $amount: Float!\n    $senderBankId: String!\n    $shareableId: String!\n  ) {\n    createTransferTransaction(\n      createTransferTransactionInput: {\n        name: $name\n        email: $email\n        amount: $amount\n        senderBankId: $senderBankId\n        shareableId: $shareableId\n      }\n    )\n  }\n": types.CreateTransferTransactionDocument,
    "\n  mutation ExchangePublicToken(\n    $publicToken: String!\n    $userId: String!\n    $dwollaCustomerId: String!\n  ) {\n    exchangePublicToken(\n      exchangePublicTokenInput: {\n        publicToken: $publicToken\n        userId: $userId\n        dwollaCustomerId: $dwollaCustomerId\n      }\n    )\n  }\n": types.ExchangePublicTokenDocument,
    "\n  mutation loginUser($email: String!, $password: String!) {\n    login(loginInput: { email: $email, password: $password }) {\n      id\n      email\n      firstName\n      lastName\n      address1\n      city\n      state\n      postalCode\n      dateOfBirth\n      ssn\n      dwollaCustomerUrl\n      dwollaCustomerId\n    }\n  }\n": types.LoginUserDocument,
    "\n  mutation registerUser(\n    $email: String!\n    $password: String!\n    $firstName: String!\n    $lastName: String!\n    $address1: String!\n    $city: String!\n    $state: String!\n    $postalCode: Float!\n    $dateOfBirth: DateTime!\n    $ssn: Float!\n  ) {\n    register(\n      registerInput: {\n        email: $email\n        password: $password\n        firstName: $firstName\n        lastName: $lastName\n        address1: $address1\n        city: $city\n        state: $state\n        postalCode: $postalCode\n        dateOfBirth: $dateOfBirth\n        ssn: $ssn\n      }\n    ) {\n      id\n      email\n      firstName\n      lastName\n      address1\n      city\n      state\n      postalCode\n      dateOfBirth\n      ssn\n      dwollaCustomerUrl\n      dwollaCustomerId\n    }\n  }\n": types.RegisterUserDocument,
    "\n  query GetBankAccountFromPlaid($bankId: String!) {\n    getBankAccountFromPlaid(bankId: $bankId) {\n      bankAccountFromPlaid {\n        id\n        bankId\n        bank {\n          id\n          accountId\n          accessToken\n          fundingSourceUrl\n          userId\n          shareableId\n        }\n        shareableId\n        institutionId\n        name\n        officialName\n        availableBalance\n        currentBalance\n        mask\n        type\n        subType\n      }\n      transactions {\n        id\n        name\n        paymentChannel\n        type\n        accountId\n        pending\n        amount\n        category\n        image\n        senderBankId\n        senderBank {\n          id\n          accountId\n          accessToken\n          fundingSourceUrl\n          userId\n          shareableId\n        }\n        receiverBankId\n        receiverBank {\n          id\n          accountId\n          accessToken\n          fundingSourceUrl\n          userId\n          shareableId\n        }\n        createdAt\n      }\n    }\n  }\n": types.GetBankAccountFromPlaidDocument,
    "\n  query GetBankAccountsFromPlaid {\n    getBankAccountsFromPlaid {\n      bankAccountsFromPlaid {\n        id\n        bankId\n        bank {\n          id\n          accountId\n          accessToken\n          fundingSourceUrl\n          userId\n          shareableId\n        }\n        shareableId\n        institutionId\n        name\n        officialName\n        availableBalance\n        currentBalance\n        mask\n        type\n        subType\n      }\n      totalBankAccounts\n      totalCurrentBalance\n    }\n  }\n": types.GetBankAccountsFromPlaidDocument,
    "\n  query GetLoggedInUser {\n    getLoggedInUser {\n      id\n      email\n      firstName\n      lastName\n      address1\n      city\n      state\n      postalCode\n      dateOfBirth\n      ssn\n      dwollaCustomerUrl\n      dwollaCustomerId\n    }\n  }\n": types.GetLoggedInUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LogoutUser {\n    logout\n  }\n"): (typeof documents)["\n  mutation LogoutUser {\n    logout\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createLinkToken {\n    createLinkToken {\n      linkToken\n    }\n  }\n"): (typeof documents)["\n  mutation createLinkToken {\n    createLinkToken {\n      linkToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateTransferTransaction(\n    $name: String!\n    $email: String!\n    $amount: Float!\n    $senderBankId: String!\n    $shareableId: String!\n  ) {\n    createTransferTransaction(\n      createTransferTransactionInput: {\n        name: $name\n        email: $email\n        amount: $amount\n        senderBankId: $senderBankId\n        shareableId: $shareableId\n      }\n    )\n  }\n"): (typeof documents)["\n  mutation CreateTransferTransaction(\n    $name: String!\n    $email: String!\n    $amount: Float!\n    $senderBankId: String!\n    $shareableId: String!\n  ) {\n    createTransferTransaction(\n      createTransferTransactionInput: {\n        name: $name\n        email: $email\n        amount: $amount\n        senderBankId: $senderBankId\n        shareableId: $shareableId\n      }\n    )\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ExchangePublicToken(\n    $publicToken: String!\n    $userId: String!\n    $dwollaCustomerId: String!\n  ) {\n    exchangePublicToken(\n      exchangePublicTokenInput: {\n        publicToken: $publicToken\n        userId: $userId\n        dwollaCustomerId: $dwollaCustomerId\n      }\n    )\n  }\n"): (typeof documents)["\n  mutation ExchangePublicToken(\n    $publicToken: String!\n    $userId: String!\n    $dwollaCustomerId: String!\n  ) {\n    exchangePublicToken(\n      exchangePublicTokenInput: {\n        publicToken: $publicToken\n        userId: $userId\n        dwollaCustomerId: $dwollaCustomerId\n      }\n    )\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation loginUser($email: String!, $password: String!) {\n    login(loginInput: { email: $email, password: $password }) {\n      id\n      email\n      firstName\n      lastName\n      address1\n      city\n      state\n      postalCode\n      dateOfBirth\n      ssn\n      dwollaCustomerUrl\n      dwollaCustomerId\n    }\n  }\n"): (typeof documents)["\n  mutation loginUser($email: String!, $password: String!) {\n    login(loginInput: { email: $email, password: $password }) {\n      id\n      email\n      firstName\n      lastName\n      address1\n      city\n      state\n      postalCode\n      dateOfBirth\n      ssn\n      dwollaCustomerUrl\n      dwollaCustomerId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation registerUser(\n    $email: String!\n    $password: String!\n    $firstName: String!\n    $lastName: String!\n    $address1: String!\n    $city: String!\n    $state: String!\n    $postalCode: Float!\n    $dateOfBirth: DateTime!\n    $ssn: Float!\n  ) {\n    register(\n      registerInput: {\n        email: $email\n        password: $password\n        firstName: $firstName\n        lastName: $lastName\n        address1: $address1\n        city: $city\n        state: $state\n        postalCode: $postalCode\n        dateOfBirth: $dateOfBirth\n        ssn: $ssn\n      }\n    ) {\n      id\n      email\n      firstName\n      lastName\n      address1\n      city\n      state\n      postalCode\n      dateOfBirth\n      ssn\n      dwollaCustomerUrl\n      dwollaCustomerId\n    }\n  }\n"): (typeof documents)["\n  mutation registerUser(\n    $email: String!\n    $password: String!\n    $firstName: String!\n    $lastName: String!\n    $address1: String!\n    $city: String!\n    $state: String!\n    $postalCode: Float!\n    $dateOfBirth: DateTime!\n    $ssn: Float!\n  ) {\n    register(\n      registerInput: {\n        email: $email\n        password: $password\n        firstName: $firstName\n        lastName: $lastName\n        address1: $address1\n        city: $city\n        state: $state\n        postalCode: $postalCode\n        dateOfBirth: $dateOfBirth\n        ssn: $ssn\n      }\n    ) {\n      id\n      email\n      firstName\n      lastName\n      address1\n      city\n      state\n      postalCode\n      dateOfBirth\n      ssn\n      dwollaCustomerUrl\n      dwollaCustomerId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetBankAccountFromPlaid($bankId: String!) {\n    getBankAccountFromPlaid(bankId: $bankId) {\n      bankAccountFromPlaid {\n        id\n        bankId\n        bank {\n          id\n          accountId\n          accessToken\n          fundingSourceUrl\n          userId\n          shareableId\n        }\n        shareableId\n        institutionId\n        name\n        officialName\n        availableBalance\n        currentBalance\n        mask\n        type\n        subType\n      }\n      transactions {\n        id\n        name\n        paymentChannel\n        type\n        accountId\n        pending\n        amount\n        category\n        image\n        senderBankId\n        senderBank {\n          id\n          accountId\n          accessToken\n          fundingSourceUrl\n          userId\n          shareableId\n        }\n        receiverBankId\n        receiverBank {\n          id\n          accountId\n          accessToken\n          fundingSourceUrl\n          userId\n          shareableId\n        }\n        createdAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetBankAccountFromPlaid($bankId: String!) {\n    getBankAccountFromPlaid(bankId: $bankId) {\n      bankAccountFromPlaid {\n        id\n        bankId\n        bank {\n          id\n          accountId\n          accessToken\n          fundingSourceUrl\n          userId\n          shareableId\n        }\n        shareableId\n        institutionId\n        name\n        officialName\n        availableBalance\n        currentBalance\n        mask\n        type\n        subType\n      }\n      transactions {\n        id\n        name\n        paymentChannel\n        type\n        accountId\n        pending\n        amount\n        category\n        image\n        senderBankId\n        senderBank {\n          id\n          accountId\n          accessToken\n          fundingSourceUrl\n          userId\n          shareableId\n        }\n        receiverBankId\n        receiverBank {\n          id\n          accountId\n          accessToken\n          fundingSourceUrl\n          userId\n          shareableId\n        }\n        createdAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetBankAccountsFromPlaid {\n    getBankAccountsFromPlaid {\n      bankAccountsFromPlaid {\n        id\n        bankId\n        bank {\n          id\n          accountId\n          accessToken\n          fundingSourceUrl\n          userId\n          shareableId\n        }\n        shareableId\n        institutionId\n        name\n        officialName\n        availableBalance\n        currentBalance\n        mask\n        type\n        subType\n      }\n      totalBankAccounts\n      totalCurrentBalance\n    }\n  }\n"): (typeof documents)["\n  query GetBankAccountsFromPlaid {\n    getBankAccountsFromPlaid {\n      bankAccountsFromPlaid {\n        id\n        bankId\n        bank {\n          id\n          accountId\n          accessToken\n          fundingSourceUrl\n          userId\n          shareableId\n        }\n        shareableId\n        institutionId\n        name\n        officialName\n        availableBalance\n        currentBalance\n        mask\n        type\n        subType\n      }\n      totalBankAccounts\n      totalCurrentBalance\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetLoggedInUser {\n    getLoggedInUser {\n      id\n      email\n      firstName\n      lastName\n      address1\n      city\n      state\n      postalCode\n      dateOfBirth\n      ssn\n      dwollaCustomerUrl\n      dwollaCustomerId\n    }\n  }\n"): (typeof documents)["\n  query GetLoggedInUser {\n    getLoggedInUser {\n      id\n      email\n      firstName\n      lastName\n      address1\n      city\n      state\n      postalCode\n      dateOfBirth\n      ssn\n      dwollaCustomerUrl\n      dwollaCustomerId\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;