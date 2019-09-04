import { gql } from "apollo-boost";

export const ADD_REVIEW = gql`
  mutation createReview($product: ID!, $username: String!, $points: Int!) {
    createReview(
      input: { product: $product, username: $username, points: $points }
    ) {
      username
      points
    }
  }
`;
