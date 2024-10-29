import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.GRAPHQL_SERVER_URI,
  cache: new InMemoryCache(),
});

export default client;