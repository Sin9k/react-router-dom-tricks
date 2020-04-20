import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { useHistory, useLocation } from "react-router-dom";
import { Form, Field } from "react-final-form";

import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";

import setFormData from "../../services/setFormData";
import getFormData from "../../services/getFormData";
import TextField from "../TextField";
import useStyles from "./styles";

const SecondStep = ({ title }) => {
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
          activeStep: 2,
        },
      });
    },
    [history, location]
  );

  const onBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <div>
      <h2>{title}</h2>
      <IconButton className={styles.backIcon} onClick={onBack}>
        <KeyboardBackspace fontSize="inherit" />
      </IconButton>
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              className={styles.field}
              name="nickname"
              component={TextField}
              type="text"
              label="Nickname"
              variant="outlined"
            />
            <Field
              className={styles.field}
              name="email"
              component={TextField}
              type="text"
              label="Email"
              variant="outlined"
            />
            <div className="buttons">
              <Button variant="contained" color="primary" type="submit">
                Finish
              </Button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

SecondStep.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SecondStep;
