import React, { useState } from "react";
import {
  Container,
  Header,
  Grid,
  Input,
  Button,
  Icon,
  TextArea
} from "semantic-ui-react";
import { withRouter } from "react-router-dom";

import { useMutation } from "@apollo/react-hooks";
import { getUsername } from "../../utils";
import { ADD_PRODUCT } from "../../graphql/addProduct/index";

function CreateProduct(props) {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const handleProductName = e => {
    setProductName(e.target.value);
  };

  const handleProductDescription = e => {
    setProductDescription(e.target.value);
  };

  const [createProduct, { data }] = useMutation(ADD_PRODUCT);
  const { history } = props;
  return (
    <Container>
      <Grid>
        <Grid.Row style={{ marginTop: "20px" }}>
          <Grid.Column width={18}>
            <Header style={{ textAlign: "left" }}>Enter the product</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={18}>
            <Input
              onChange={handleProductName}
              label="Name"
              placeholder="Product 1"
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={18}>
            <TextArea
              onChange={handleProductDescription}
              placeholder="Product Description"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid>
        <Grid.Row>
          <Grid.Column style={{ textAlign: "right" }} width={18}>
            <Button
              primary
              onClick={e => {
                e.preventDefault();
                createProduct({
                  variables: {
                    name: productName,
                    description: productDescription,
                    username: getUsername()
                  }
                });
                history.push("/products/detail", {
                  description: productDescription,
                  name: productName
                });
              }}
              animated="vertical"
            >
              <Button.Content hidden>
                <Icon name="add" />
              </Button.Content>
              <Button.Content visible>Add Product</Button.Content>
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default withRouter(CreateProduct);
