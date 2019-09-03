import React from "react";
import { Card, Icon } from "semantic-ui-react";

const listFilledStars = reviews => {
  return Array.from(Array(reviews).keys()).map(review => {
    return <Icon name="star" />;
  });
};

const listUnfilledStars = reviews => {
  return Array.from(Array(5 - reviews).keys()).map(review => {
    return <Icon name="star outline" />;
  });
};
const ProductCard = props => {
  const { name, reviews, index } = props;

  return (
    <Card key={index}>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
      </Card.Content>

      <Card.Content extra>
        {listFilledStars(reviews)}
        {listUnfilledStars(reviews)}
      </Card.Content>
    </Card>
  );
};

export default ProductCard;
