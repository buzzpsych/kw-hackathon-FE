import React from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import Form from "./components/Form";
import { getUsername } from "../../utils";
import "./styles.scss";
const productReview = props => {
  return (
    <Container className="product_review">
      <Grid.Column width={12}>
        <Header as="h2" className="title">
          Product #1
        </Header>
        <div className="user">Hello, {getUsername()}</div>
      </Grid.Column>
      <Form {...props} />
    </Container>
  );
};

export default productReview;
