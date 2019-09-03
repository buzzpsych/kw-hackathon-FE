import React from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import Form from "./components/Form";
import { getUsername } from "../../utils";
import "./styles.scss";
const productReview = props => {
  const product = {
    id: 23,
    name: "Fake Product",
    description: "Fake Description"
  };
  return (
    <Container className="product_review">
      <Grid.Column width={12}>
        <Header as="h2" className="title">
          Product:{product.id} - {product.name}
        </Header>
        <div className="user">Hello, {getUsername()}</div>
      </Grid.Column>
      <Form product={product} />
    </Container>
  );
};

export default productReview;
