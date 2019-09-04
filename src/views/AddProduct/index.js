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
import { isEmpty } from "lodash";
import { withRouter } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { getUsername } from "../../utils";
import { ADD_PRODUCT } from "../../graphql/addProduct/index";
import "./styles.scss";

function CreateProduct(props) {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [error, setError] = useState("");
  const [createProduct] = useMutation(ADD_PRODUCT);
  const { history } = props;

  const handleProductName = e => {
    setProductName(e.target.value);
  };

  const handleProductDescription = e => {
    setProductDescription(e.target.value);
  };

  const validateInput = () => {
    if (!isEmpty(productName) && !isEmpty(productDescription)) {
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
    } else {
      setError("The fields are required");
    }
  };

  return (
    <Container className="add-product">
      <Grid>
        <Grid.Row>
          <Grid.Column width={6}>
            <Header>Enter the product</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={6}>
            <Input
              onChange={handleProductName}
              label="Name"
              placeholder="Product name"
              className="add-input"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <TextArea
              onChange={handleProductDescription}
              placeholder="Product Description"
              className="add-textarea"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid>
        <Grid.Row>
          <Grid.Column className="button-content" width={12}>
            <Button
              primary
              onClick={e => {
                e.preventDefault();
                validateInput();
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
        {!isEmpty(error) && <label className="error">{error}</label>}
      </Grid>
    </Container>
  );
}

export default withRouter(CreateProduct);
