import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://product-reviews-back.herokuapp.com/graphql"
});

export default client;
