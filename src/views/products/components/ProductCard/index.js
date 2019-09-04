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
const ProductCard = ({ id, name, average, showDetails, description }) => {
  return (
    <Card onClick={() => showDetails(id, name, average, description)}>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
      </Card.Content>

      <Card.Content extra>
        {listFilledStars(average)}
        {listUnfilledStars(average)}
      </Card.Content>
    </Card>
  );
};

export default ProductCard;
