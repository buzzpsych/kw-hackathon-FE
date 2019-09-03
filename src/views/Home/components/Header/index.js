import React from "react";
import { Grid, Header } from "semantic-ui-react";

const HomeHeader = () => {
  return (
    <Grid.Row>
      <Grid.Column width={12}>
        <Header as="h1">Home Page</Header>
      </Grid.Column>
    </Grid.Row>
  );
};

export default HomeHeader;
