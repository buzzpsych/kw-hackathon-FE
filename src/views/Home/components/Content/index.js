import React, { useState } from "react";
import { Grid, Button } from "semantic-ui-react";

const HomeContent = props => {
  const [username, setUsername] = useState("");

  const onChange = e => {
    setUsername(e.target.value);
  };
  const savingUsername = () => {
    localStorage.setItem("username", username);
    props.history.push("/products");
  };

  return (
    <Grid.Row className="content">
      <div className="card">
        <Grid.Column width={12}>
          <form class="ui form">
            <div class="field">
              <label>Enter username:</label>
              <input
                onChange={e => onChange(e)}
                type="text"
                name="username"
                placeholder="username"
                value={username}
              />
            </div>
            <Button
              class="ui button"
              primary
              onClick={() => savingUsername()}
              type="button"
            >
              Submit
            </Button>
          </form>
        </Grid.Column>
      </div>
    </Grid.Row>
  );
};

export default HomeContent;
