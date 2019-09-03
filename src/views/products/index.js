import React from "react";
import { withRouter } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import { Container, Header, Grid, Button, Icon } from "semantic-ui-react";

const productsExample = [
  { name: "Product 1", reviews: 3 },
  { name: "Product 2", reviews: 4 }
];
const Products = props => {
  const { history } = props;
  const listProducts = productsExample.map(product => {
    return (
      <Grid.Column width={3}>
        <ProductCard name={product.name} reviews={product.reviews} />
      </Grid.Column>
    );
  });

  return (
    <Container>
      <Grid>
        <Grid.Row style={{ marginTop: "20px" }}>
          <Grid.Column width={13}>
            <Header style={{ textAlign: "left" }}>Review's Site</Header>
          </Grid.Column>
          <Grid.Column width={3}>
            <Button onClick={() => history.push("/products/add")} animated>
              <Button.Content visible>Add Product</Button.Content>
              <Button.Content hidden>
                <Icon name="add" />
              </Button.Content>
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid>
        <Grid.Row>{listProducts}</Grid.Row>
      </Grid>
    </Container>
  );
};
export default withRouter(Products);
