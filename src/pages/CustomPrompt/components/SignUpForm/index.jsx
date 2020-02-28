/* global JSON */
import React, { useContext, useMemo } from "react";
import classNames from "classnames";
import { Prompt } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import DeviceInfoContext from "~/contexts/DeviceInfoContext";

import usePreventReload from "./usePreventReload";
import useFormState from "./useFormState";
import useStyles from "./styles";

const SignUpForm = () => {
  const styles = useStyles();
  const deviceInfo = useContext(DeviceInfoContext);

  const { fields, onChange, onSubmit } = useFormState();

  const containerClasses = classNames(styles.container, {
    [styles.mobileContainer]: deviceInfo.isMobile
  });

  const isEmpty = Object.keys(fields).length === 0;

  usePreventReload(isEmpty);

  const promptMessage = useMemo(() => JSON.stringify({ fields }), [fields]);

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      autoComplete="off"
      className={containerClasses}
    >
      <h2>Sign Up</h2>
      <Prompt when={!isEmpty} message={promptMessage} />
      <TextField
        label="First Name"
        name="firstName"
        onChange={onChange}
        className={styles.field}
      />
      <TextField
        label="Last Name"
        name="lastName"
        onChange={onChange}
        className={styles.field}
      />
      <TextField
        label="Username"
        name="username"
        onChange={onChange}
        className={styles.field}
      />
      <TextField
        label="Password"
        name="password"
        onChange={onChange}
        className={styles.field}
      />
      <TextField
        label="Repeat Password"
        name="repeatPassword"
        onChange={onChange}
        className={styles.field}
      />
      <Button type="submit" variant="contained" color="secondary">
        Send
      </Button>
    </form>
  );
};

export default SignUpForm;
