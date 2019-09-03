import React from "react";
import {
  Button,
  Container,
  Grid,
  Header,
  Input,
  Label
} from "semantic-ui-react";
import "./styles.scss";

const productReview = () => {
  return (
    <Container className="product_review">
      <Grid.Column width={12}>
        <Header as="h2" className="title">
          Product #1
        </Header>
      </Grid.Column>
      <Grid columns={16} className="box">
        <Grid.Row>
          <Grid.Column width={10} className="box__description">
            <Container>
              <Label>Description:</Label>
              <Input placeholder="Enter your description" />
            </Container>
            <Container>
              <Label className="label__strong">Review: 3/5</Label>
            </Container>
          </Grid.Column>
          <Grid.Column width={12}>
            <Container className="box__review">
              <Label>Enter review:</Label>
              <Input className="inputText inputText--small" />
              <Button primary>Submit</Button>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default productReview;
