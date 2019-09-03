import React from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import Form from "./components/Form";
import "./styles.scss";

const productReview = props => {
  return (
    <Container className="product_review">
      <Grid.Column width={12}>
        <Header as="h2" className="title">
          Product #1
        </Header>
      </Grid.Column>
      <Form {...props} />
    </Container>
  );
};

export default productReview;
