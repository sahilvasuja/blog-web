import {
    ApolloProvider,
    ApolloClient,
    HttpLink,
    InMemoryCache,
  } from "@apollo/client";
  import { onError } from "@apollo/client/link/error";
  const errorLink = onError(({ graphqlErrors, networkError }:any) => {
    if (graphqlErrors) {
      graphqlErrors.map(({ message}) => {
        alert(`Graphql error ${message}`);
      });
    }
  });
  
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "https://sahil-firstproject.hasura.app/v1/graphql",
      headers: {
        "x-hasura-admin-secret":
          "zfzk7e4yAENhUT7RYhuWYWaul5AXt5uAPd38Jzd2CyJQz7GJrutVOAsDSQGCU3z6",
      },
    }),
  });
  export default client;
//   <ApolloProvider client={client}>
    
//   </ApolloProvider>