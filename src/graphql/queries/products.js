import { gql } from "apollo-boost";

export const getProducts = gql`
  query products {
    products {
      id
      name
      description
      reviews {
        username
        points
      }
      average
    }
  }
`;
