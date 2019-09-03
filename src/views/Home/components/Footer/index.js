import React from "react";
import { Grid, Header } from "semantic-ui-react";

const HomeFooter = () => {
  return (
    <Grid.Row>
      <Grid.Column width={12}>
        <Header as="h5" className="footer">
          Created by Travelers team
        </Header>
      </Grid.Column>
    </Grid.Row>
  );
};

export default HomeFooter;
