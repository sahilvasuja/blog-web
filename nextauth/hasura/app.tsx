import { ApolloClient, HttpLink,from,ApolloProvider, InMemoryCache  } from "@apollo/client";

const link=from([new HttpLink({uri: "http://localhost:3000/graphql"})])
interface MyApolloClient extends ApolloClient<unknown> {}
const client=new ApolloClient({
    cache: new InMemoryCache(),
    link: link
})

export default client;