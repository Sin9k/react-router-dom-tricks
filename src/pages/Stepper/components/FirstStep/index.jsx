import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { useHistory, useLocation } from "react-router-dom";
import { Form, Field } from "react-final-form";

import Button from "@material-ui/core/Button";

import setFormData from "../../services/setFormData";
import getFormData from "../../services/getFormData";
import TextField from "../TextField";
import useStyles from "./styles";

const FirstStep = ({ title }) => {
  const history = useHistory();
  const location = useLocation();
  const [initialValues] = useState(getFormData());

  const styles = useStyles();

  const onSubmit = useCallback(
    (values) => {
      setFormData(values);
      history.push({
        ...location,
        state: {
          activeStep: 1,
        },
      });
    },
    [history, location]
  );

  return (
    <div>
      <h2>{title}</h2>
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              className={styles.field}
              name="firstName"
              component={TextField}
              type="text"
              label="First Name"
              variant="outlined"
            />
            <Field
              className={styles.field}
              name="lastName"
              component={TextField}
              type="text"
              label="Last Name"
              variant="outlined"
            />
            <div className="buttons">
              <Button variant="contained" color="primary" type="submit">
                Next
              </Button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

FirstStep.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FirstStep;
