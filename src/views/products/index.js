import React from "react";
import { withRouter } from "react-router-dom";
import { isEmpty, toInteger } from "lodash";
import ProductCard from "./components/ProductCard";
import { useQuery } from "@apollo/react-hooks";
import { getProducts } from "../../graphql/queries/products";
import { Container, Header, Grid, Button, Icon } from "semantic-ui-react";

const listProducts = data => {
  const listProducts = data.products.map((product, index) => {
    return (
      <Grid.Column width={3} key={index} style={{ marginBottom: "1em" }}>
        <ProductCard name={product.name} reviews={product.average} />
      </Grid.Column>
    );
  });

  return listProducts;
};

const Products = props => {
  const { loading, error, data } = useQuery(getProducts);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const { history } = props;
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
        <Grid.Row>{listProducts(data)}</Grid.Row>
      </Grid>
    </Container>
  );
};
export default withRouter(Products);
