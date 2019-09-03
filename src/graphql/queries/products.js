import gql from "graphql-tag";

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
