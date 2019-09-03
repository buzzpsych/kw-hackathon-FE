import { gql } from "apollo-boost";

export const ADD_PRODUCT = gql`
  mutation createProduct(
    $name: String!
    $description: String!
    $username: String!
  ) {
    createProduct(
      input: { name: $name, description: $description, username: $username }
    ) {
      username
      name
      description
    }
  }
`;
