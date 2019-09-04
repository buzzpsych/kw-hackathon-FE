import React from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import Form from "./components/Form";
import { getUsername } from "../../utils";
import "./styles.scss";
const productReview = props => {
  const { name, description, reviews, id } = props.location.state;
  const product = {
    name: name,
    description: description,
    reviews: reviews,
    id: id
  };
  return (
    <Container className="product_review">
      <Grid.Column width={12}>
        <Header as="h2" className="title">
          Product: {name}
        </Header>
        <div className="user">Hello, {getUsername()}</div>
      </Grid.Column>
      <Form product={product} {...props} />
    </Container>
  );
};

export default productReview;
