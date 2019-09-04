import React from "react";
import { withRouter } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import { useQuery } from "@apollo/react-hooks";
import { getProducts } from "../../graphql/queries/products";
import {
  Container,
  Header,
  Grid,
  Button,
  Icon,
  Loader
} from "semantic-ui-react";
import "./styles.scss";

const listProducts = (data, showDetails) => {
  const listProducts = data.products.map((product, index) => {
    return (
      <Grid.Column width={3} key={index} className="card-space">
        <ProductCard {...product} showDetails={showDetails} />
      </Grid.Column>
    );
  });

  return listProducts;
};

const Products = props => {
  const { loading, error, data } = useQuery(getProducts);

  if (loading)
    return (
      <Loader active className="workaround" size="large" inline="centered" />
    );
  if (error) return <p>Error :(</p>;
  const { history } = props;

  const showDetails = (id, name, reviews, description) => {
    history.push("/products/detail", {
      description: description,
      reviews: reviews,
      name: name,
      id: id
    });
  };

  return (
    <Container className="products">
      <Grid>
        <Grid.Row>
          <Grid.Column width={13}>
            <Header>Review's Site</Header>
          </Grid.Column>
          <Grid.Column width={3}>
            <Button
              onClick={() => history.push("/products/add")}
              primary
              animated
            >
              <Button.Content visible>Add Product</Button.Content>
              <Button.Content hidden>
                <Icon name="add" />
              </Button.Content>
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid>
        <Grid.Row>{listProducts(data, showDetails)}</Grid.Row>
      </Grid>
    </Container>
  );
};
export default withRouter(Products);
