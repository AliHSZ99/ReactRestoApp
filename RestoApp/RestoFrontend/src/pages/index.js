import React from "react"
import Layout from "../components/Layout";
import MenuItems from "../components/MenuItems";
// import * as styles from "../styles/home.module.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

// apollo client
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache()
});

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <MenuItems />
      </Layout>
    </ApolloProvider>
  );
}