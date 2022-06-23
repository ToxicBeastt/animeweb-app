import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message }) => {
      alert(`Graphql Error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://graphql.anilist.co/api/v2/" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

export default client;
