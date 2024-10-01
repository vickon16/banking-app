import { useApollo } from "@/apolloClient";
import RootLayout from "@/components/layouts/RootLayout";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ApolloProvider>
  );
}
