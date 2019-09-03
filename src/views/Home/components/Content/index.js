import React, { useState } from "react";
import { Grid, Button, Input } from "semantic-ui-react";
import { isEmpty } from "lodash";

const HomeContent = props => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const onChange = e => {
    setUsername(e.target.value);
  };
  const savingUsername = () => {
    localStorage.setItem("username", username);
    props.history.push("/products");
  };

  const validateInput = () => {
    if (!isEmpty(username)) {
      savingUsername();
    } else {
      setError("Username required");
    }
  };

  return (
    <Grid.Row className="content">
      <div className="card">
        <Grid.Column width={12}>
          <form class="ui form">
            <div class="field">
              <label>Enter username:</label>
              <Input
                onChange={e => onChange(e)}
                placeholder="username"
                value={username}
              />
              {!isEmpty(error) && <label className="error">{error}</label>}
            </div>

            <Button
              class="ui button"
              primary
              onClick={() => validateInput()}
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
