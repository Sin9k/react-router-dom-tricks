import React, { useCallback, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

import Switch from "@material-ui/core/Switch";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";

import useStyles from "./styles";

const Login = ({ isAuthorized, setIsAuthorized }) => {
  const { state } = useLocation();
  const history = useHistory();

  const [value, setValue] = useState(isAuthorized);

  const onChange = useCallback((event, value) => setValue(value), [setValue]);
  const onSignIn = useCallback(() => {
    setIsAuthorized(value);
    const link = (state && state.from) || "/restore-prevented-route";
    history.replace(link);
  }, [setIsAuthorized, value, history, state]);

  const styles = useStyles();

  return (
    <FormControl component="fieldset">
      <h2>Login</h2>
      <FormControlLabel
        control={<Switch checked={value} onChange={onChange} color="primary" />}
        label="Toggle to authorize and press button to apply"
      />
      <Button
        className={styles.button}
        onClick={onSignIn}
        color="primary"
        variant="contained"
        disabled={isAuthorized === value}
      >
        {isAuthorized ? "Unauthorize" : "Sign In"}
      </Button>
    </FormControl>
  );
};

export default Login;
