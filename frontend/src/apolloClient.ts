import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
} from "@apollo/client";
import { useMemo } from "react";

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined", // Disables forceFetch on the server (so queries are only run once)
    cache: new InMemoryCache(),
    headers: {
      "Content-Type": "application/json",
    },
    link: new HttpLink({
      uri: `${process.env.NEXT_PUBLIC_SERVER_URL}/graphql`,
      credentials: "include", // or "same-origin"
    }),
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) _apolloClient.cache.restore(initialState);

  // Always initialize a new Apollo Client for server-side rendering (SSR)
  if (typeof window === "undefined") return _apolloClient;

  // Create Apollo Client once for client-side use
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(initialState: any) {
  return useMemo(() => initializeApollo(initialState), [initialState]);
}
