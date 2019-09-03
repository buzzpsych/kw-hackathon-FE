import React from "react";
import { Grid, Header } from "semantic-ui-react";

const HomeFooter = () => {
  return (
    <Grid.Row>
      <Grid.Column width={12}>
        <Header as="h5" style={{ textAlign: "center", marginTop: "1em" }}>
          Created by Travelers team
        </Header>
      </Grid.Column>
    </Grid.Row>
  );
};

export default HomeFooter;
