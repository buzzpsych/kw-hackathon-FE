import React from "react";
import { Grid, Button } from "semantic-ui-react";

const HomeContent = () => {
  return (
    <Grid.Row style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{ padding: "4em", border: " 1px solid #bcbdbd", width: "50%" }}
      >
        <Grid.Column width={12}>
          <form class="ui form">
            <div class="field">
              <label>Enter username:</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <Button class="ui button" primary type="submit">
              Submit
            </Button>
          </form>
        </Grid.Column>
      </div>
    </Grid.Row>
  );
};

export default HomeContent;
