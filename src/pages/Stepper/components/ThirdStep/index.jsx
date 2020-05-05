import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";

import getFormData from "../../services/getFormData";
import useStyles from "./styles";

const ThirdStep = ({ title }) => {
  const [initialValues] = useState(getFormData());
  const history = useHistory();
  const styles = useStyles();

  const onBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <div>
      <h2>{title}</h2>
      <IconButton className={styles.backIcon} onClick={onBack}>
        <KeyboardBackspace fontSize="inherit" />
      </IconButton>
      {Object.entries(initialValues).map(([label, value]) => {
        return (
          <p key={label} className={styles.label}>
            <b>{label}:</b>&nbsp;{value}
          </p>
        );
      })}
    </div>
  );
};

ThirdStep.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ThirdStep;
