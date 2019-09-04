import React, { useState } from "react";
import { Button, Container, Grid, Input, Label } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import { isEmpty, toInteger } from "lodash";
import { ADD_REVIEW } from "../../../../graphql/addReview";
import { getUsername } from "../../../../utils";

const Form = props => {
  const [review, setReview] = useState("");
  const [error, setError] = useState("");
  const [createReview] = useMutation(ADD_REVIEW);
  const onChange = e => {
    setReview(e.target.value);
  };

  const validateInput = () => {
    if (!isEmpty(review)) {
      createReview({
        variables: {
          product: props.product.id,
          points: toInteger(review),
          username: getUsername()
        },
        refetchQueries: ["products"]
      });

      props.history.push("/products");
    } else {
      setError("The field is required");
    }
  };

  return (
    <Grid columns={16} className="box">
      <Grid.Row>
        <Grid.Column width={10} className="box__description">
          <Container>
            <Label>Description:</Label>
            <span>{props.product.description}</span>
          </Container>
          <Container>
            <Label className="label__strong">
              Review:{" "}
              {!isEmpty(props.product.reviews) ? props.product.reviews : 0} / 5
            </Label>
          </Container>
        </Grid.Column>
        <Grid.Column width={12}>
          <Container className="box__review">
            <Label>Enter review:</Label>
            <Input onChange={e => onChange(e)} value={review} />
            <Button primary onClick={() => validateInput()}>
              Submit
            </Button>
          </Container>
          {!isEmpty(error) && <label className="error">{error}</label>}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Form;
