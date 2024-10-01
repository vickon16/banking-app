/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };

export const LogoutUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "LogoutUser" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "logout" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LogoutUserMutation, LogoutUserMutationVariables>;
export const CreateLinkTokenDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "createLinkToken" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createLinkToken" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "linkToken" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateLinkTokenMutation,
  CreateLinkTokenMutationVariables
>;
export const CreateTransferTransactionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateTransferTransaction" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "email" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "amount" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "senderBankId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "shareableId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createTransferTransaction" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "createTransferTransactionInput" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "name" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "name" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "email" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "email" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "amount" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "amount" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "senderBankId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "senderBankId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "shareableId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "shareableId" },
                      },
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateTransferTransactionMutation,
  CreateTransferTransactionMutationVariables
>;
export const ExchangePublicTokenDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "ExchangePublicToken" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "publicToken" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "dwollaCustomerId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "exchangePublicToken" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "exchangePublicTokenInput" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "publicToken" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "publicToken" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "userId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "userId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "dwollaCustomerId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "dwollaCustomerId" },
                      },
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ExchangePublicTokenMutation,
  ExchangePublicTokenMutationVariables
>;
export const LoginUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "loginUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "email" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "password" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "login" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "loginInput" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "email" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "email" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "password" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "password" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "firstName" } },
                { kind: "Field", name: { kind: "Name", value: "lastName" } },
                { kind: "Field", name: { kind: "Name", value: "address1" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "state" } },
                { kind: "Field", name: { kind: "Name", value: "postalCode" } },
                { kind: "Field", name: { kind: "Name", value: "dateOfBirth" } },
                { kind: "Field", name: { kind: "Name", value: "ssn" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "dwollaCustomerUrl" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "dwollaCustomerId" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const RegisterUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "registerUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "email" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "password" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "firstName" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "lastName" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "address1" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "city" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "state" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "postalCode" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "dateOfBirth" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "DateTime" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "ssn" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "register" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "registerInput" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "email" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "email" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "password" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "password" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "firstName" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "firstName" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "lastName" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "lastName" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "address1" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "address1" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "city" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "city" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "state" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "state" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "postalCode" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "postalCode" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "dateOfBirth" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "dateOfBirth" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "ssn" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "ssn" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "firstName" } },
                { kind: "Field", name: { kind: "Name", value: "lastName" } },
                { kind: "Field", name: { kind: "Name", value: "address1" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "state" } },
                { kind: "Field", name: { kind: "Name", value: "postalCode" } },
                { kind: "Field", name: { kind: "Name", value: "dateOfBirth" } },
                { kind: "Field", name: { kind: "Name", value: "ssn" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "dwollaCustomerUrl" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "dwollaCustomerId" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RegisterUserMutation,
  RegisterUserMutationVariables
>;
export const GetBankAccountFromPlaidDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetBankAccountFromPlaid" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "bankId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getBankAccountFromPlaid" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "bankId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "bankId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "bankAccountFromPlaid" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "bankId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "bank" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "accountId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "accessToken" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fundingSourceUrl" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "userId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "shareableId" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "shareableId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "institutionId" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "officialName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "availableBalance" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "currentBalance" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "mask" } },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "subType" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "transactions" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "paymentChannel" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "accountId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "pending" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "image" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "senderBankId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "senderBank" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "accountId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "accessToken" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fundingSourceUrl" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "userId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "shareableId" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "receiverBankId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "receiverBank" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "accountId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "accessToken" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fundingSourceUrl" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "userId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "shareableId" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetBankAccountFromPlaidQuery,
  GetBankAccountFromPlaidQueryVariables
>;
export const GetBankAccountsFromPlaidDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetBankAccountsFromPlaid" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getBankAccountsFromPlaid" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "bankAccountsFromPlaid" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "bankId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "bank" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "accountId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "accessToken" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fundingSourceUrl" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "userId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "shareableId" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "shareableId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "institutionId" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "officialName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "availableBalance" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "currentBalance" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "mask" } },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "subType" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalBankAccounts" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalCurrentBalance" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetBankAccountsFromPlaidQuery,
  GetBankAccountsFromPlaidQueryVariables
>;
export const GetLoggedInUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetLoggedInUser" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getLoggedInUser" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "firstName" } },
                { kind: "Field", name: { kind: "Name", value: "lastName" } },
                { kind: "Field", name: { kind: "Name", value: "address1" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "state" } },
                { kind: "Field", name: { kind: "Name", value: "postalCode" } },
                { kind: "Field", name: { kind: "Name", value: "dateOfBirth" } },
                { kind: "Field", name: { kind: "Name", value: "ssn" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "dwollaCustomerUrl" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "dwollaCustomerId" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetLoggedInUserQuery,
  GetLoggedInUserQueryVariables
>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any };
};

export type Bank = {
  __typename?: "Bank";
  accessToken?: Maybe<Scalars["String"]["output"]>;
  accountId: Scalars["String"]["output"];
  fundingSourceUrl?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  shareableId?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<User>;
  userId: Scalars["String"]["output"];
};

export type BankAccount = {
  __typename?: "BankAccount";
  availableBalance?: Maybe<Scalars["Float"]["output"]>;
  bank?: Maybe<Bank>;
  bankId: Scalars["String"]["output"];
  currentBalance?: Maybe<Scalars["Float"]["output"]>;
  id: Scalars["String"]["output"];
  institutionId: Scalars["String"]["output"];
  mask?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  officialName: Scalars["String"]["output"];
  shareableId: Scalars["String"]["output"];
  subType?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type CreateLinkTokenResponse = {
  __typename?: "CreateLinkTokenResponse";
  linkToken: Scalars["String"]["output"];
};

export type ExchangePublicTokenDto = {
  dwollaCustomerId: Scalars["String"]["input"];
  publicToken: Scalars["String"]["input"];
  userId: Scalars["String"]["input"];
};

export type GetBankAccountFromPlaidResponse = {
  __typename?: "GetBankAccountFromPlaidResponse";
  bankAccountFromPlaid: BankAccount;
  transactions: Array<Transaction>;
};

export type GetBankAccountsFromPlaidResponse = {
  __typename?: "GetBankAccountsFromPlaidResponse";
  bankAccountsFromPlaid: Array<BankAccount>;
  totalBankAccounts: Scalars["Float"]["output"];
  totalCurrentBalance: Scalars["Float"]["output"];
};

export type LoginDto = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type Mutation = {
  __typename?: "Mutation";
  createLinkToken: CreateLinkTokenResponse;
  createTransferTransaction: Scalars["String"]["output"];
  exchangePublicToken: Scalars["String"]["output"];
  login: User;
  logout: Scalars["String"]["output"];
  register: User;
};

export type MutationCreateTransferTransactionArgs = {
  createTransferTransactionInput: TransferTransactionDto;
};

export type MutationExchangePublicTokenArgs = {
  exchangePublicTokenInput: ExchangePublicTokenDto;
};

export type MutationLoginArgs = {
  loginInput: LoginDto;
};

export type MutationRegisterArgs = {
  registerInput: RegisterDto;
};

export type Query = {
  __typename?: "Query";
  getBank: Bank;
  getBankAccountFromPlaid: GetBankAccountFromPlaidResponse;
  getBankAccountsFromPlaid: GetBankAccountsFromPlaidResponse;
  getBanks: Array<Bank>;
  getLoggedInUser?: Maybe<User>;
};

export type QueryGetBankArgs = {
  accountId: Scalars["String"]["input"];
  bankId: Scalars["String"]["input"];
};

export type QueryGetBankAccountFromPlaidArgs = {
  bankId: Scalars["String"]["input"];
};

export type RegisterDto = {
  address1: Scalars["String"]["input"];
  city: Scalars["String"]["input"];
  dateOfBirth: Scalars["DateTime"]["input"];
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  lastName: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  postalCode: Scalars["Float"]["input"];
  ssn: Scalars["Float"]["input"];
  state: Scalars["String"]["input"];
};

export type Transaction = {
  __typename?: "Transaction";
  accountId: Scalars["String"]["output"];
  amount: Scalars["Float"]["output"];
  category?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["String"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  paymentChannel: Scalars["String"]["output"];
  pending: Scalars["Boolean"]["output"];
  receiver?: Maybe<User>;
  receiverBank?: Maybe<Bank>;
  receiverBankId?: Maybe<Scalars["String"]["output"]>;
  receiverId?: Maybe<Scalars["String"]["output"]>;
  sender?: Maybe<User>;
  senderBank?: Maybe<Bank>;
  senderBankId?: Maybe<Scalars["String"]["output"]>;
  senderId?: Maybe<Scalars["String"]["output"]>;
  type: TransactionType;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

/** transaction type can either be debit or credit */
export enum TransactionType {
  Credit = "credit",
  Debit = "debit",
  None = "none",
}

export type TransferTransactionDto = {
  amount: Scalars["Float"]["input"];
  email: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  senderBankId: Scalars["String"]["input"];
  shareableId: Scalars["String"]["input"];
};

export type User = {
  __typename?: "User";
  address1?: Maybe<Scalars["String"]["output"]>;
  banks?: Maybe<Array<Bank>>;
  city?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  dateOfBirth?: Maybe<Scalars["DateTime"]["output"]>;
  dwollaCustomerId?: Maybe<Scalars["String"]["output"]>;
  dwollaCustomerUrl?: Maybe<Scalars["String"]["output"]>;
  email: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  lastName: Scalars["String"]["output"];
  postalCode?: Maybe<Scalars["Float"]["output"]>;
  ssn?: Maybe<Scalars["Float"]["output"]>;
  state?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type LogoutUserMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutUserMutation = { __typename?: "Mutation"; logout: string };

export type CreateLinkTokenMutationVariables = Exact<{ [key: string]: never }>;

export type CreateLinkTokenMutation = {
  __typename?: "Mutation";
  createLinkToken: {
    __typename?: "CreateLinkTokenResponse";
    linkToken: string;
  };
};

export type CreateTransferTransactionMutationVariables = Exact<{
  name: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  amount: Scalars["Float"]["input"];
  senderBankId: Scalars["String"]["input"];
  shareableId: Scalars["String"]["input"];
}>;

export type CreateTransferTransactionMutation = {
  __typename?: "Mutation";
  createTransferTransaction: string;
};

export type ExchangePublicTokenMutationVariables = Exact<{
  publicToken: Scalars["String"]["input"];
  userId: Scalars["String"]["input"];
  dwollaCustomerId: Scalars["String"]["input"];
}>;

export type ExchangePublicTokenMutation = {
  __typename?: "Mutation";
  exchangePublicToken: string;
};

export type LoginUserMutationVariables = Exact<{
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}>;

export type LoginUserMutation = {
  __typename?: "Mutation";
  login: {
    __typename?: "User";
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    address1?: string | null;
    city?: string | null;
    state?: string | null;
    postalCode?: number | null;
    dateOfBirth?: any | null;
    ssn?: number | null;
    dwollaCustomerUrl?: string | null;
    dwollaCustomerId?: string | null;
  };
};

export type RegisterUserMutationVariables = Exact<{
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  lastName: Scalars["String"]["input"];
  address1: Scalars["String"]["input"];
  city: Scalars["String"]["input"];
  state: Scalars["String"]["input"];
  postalCode: Scalars["Float"]["input"];
  dateOfBirth: Scalars["DateTime"]["input"];
  ssn: Scalars["Float"]["input"];
}>;

export type RegisterUserMutation = {
  __typename?: "Mutation";
  register: {
    __typename?: "User";
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    address1?: string | null;
    city?: string | null;
    state?: string | null;
    postalCode?: number | null;
    dateOfBirth?: any | null;
    ssn?: number | null;
    dwollaCustomerUrl?: string | null;
    dwollaCustomerId?: string | null;
  };
};

export type GetBankAccountFromPlaidQueryVariables = Exact<{
  bankId: Scalars["String"]["input"];
}>;

export type GetBankAccountFromPlaidQuery = {
  __typename?: "Query";
  getBankAccountFromPlaid: {
    __typename?: "GetBankAccountFromPlaidResponse";
    bankAccountFromPlaid: {
      __typename?: "BankAccount";
      id: string;
      bankId: string;
      shareableId: string;
      institutionId: string;
      name: string;
      officialName: string;
      availableBalance?: number | null;
      currentBalance?: number | null;
      mask?: string | null;
      type?: string | null;
      subType?: string | null;
      bank?: {
        __typename?: "Bank";
        id: string;
        accountId: string;
        accessToken?: string | null;
        fundingSourceUrl?: string | null;
        userId: string;
        shareableId?: string | null;
      } | null;
    };
    transactions: Array<{
      __typename?: "Transaction";
      id: string;
      name: string;
      paymentChannel: string;
      type: TransactionType;
      accountId: string;
      pending: boolean;
      amount: number;
      category?: string | null;
      image?: string | null;
      senderBankId?: string | null;
      receiverBankId?: string | null;
      createdAt?: any | null;
      senderBank?: {
        __typename?: "Bank";
        id: string;
        accountId: string;
        accessToken?: string | null;
        fundingSourceUrl?: string | null;
        userId: string;
        shareableId?: string | null;
      } | null;
      receiverBank?: {
        __typename?: "Bank";
        id: string;
        accountId: string;
        accessToken?: string | null;
        fundingSourceUrl?: string | null;
        userId: string;
        shareableId?: string | null;
      } | null;
    }>;
  };
};

export type GetBankAccountsFromPlaidQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetBankAccountsFromPlaidQuery = {
  __typename?: "Query";
  getBankAccountsFromPlaid: {
    __typename?: "GetBankAccountsFromPlaidResponse";
    totalBankAccounts: number;
    totalCurrentBalance: number;
    bankAccountsFromPlaid: Array<{
      __typename?: "BankAccount";
      id: string;
      bankId: string;
      shareableId: string;
      institutionId: string;
      name: string;
      officialName: string;
      availableBalance?: number | null;
      currentBalance?: number | null;
      mask?: string | null;
      type?: string | null;
      subType?: string | null;
      bank?: {
        __typename?: "Bank";
        id: string;
        accountId: string;
        accessToken?: string | null;
        fundingSourceUrl?: string | null;
        userId: string;
        shareableId?: string | null;
      } | null;
    }>;
  };
};

export type GetLoggedInUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetLoggedInUserQuery = {
  __typename?: "Query";
  getLoggedInUser?: {
    __typename?: "User";
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    address1?: string | null;
    city?: string | null;
    state?: string | null;
    postalCode?: number | null;
    dateOfBirth?: any | null;
    ssn?: number | null;
    dwollaCustomerUrl?: string | null;
    dwollaCustomerId?: string | null;
  } | null;
};
