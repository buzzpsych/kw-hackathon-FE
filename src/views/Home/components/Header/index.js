import React from "react";
import { Grid, Header } from "semantic-ui-react";

const HomeHeader = () => {
  return (
    <Grid.Row>
      <Grid.Column width={12}>
        <Header
          style={{
            textAlign: "center",
            paddingTop: "2em",
            marginBottom: "2em"
          }}
          as="h1"
        >
          Home Page
        </Header>
      </Grid.Column>
    </Grid.Row>
  );
};

export default HomeHeader;
