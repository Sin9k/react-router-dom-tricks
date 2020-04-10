import React, { useCallback, useState } from "react";
import { useLocation, useHistory, Route, Switch } from "react-router-dom";

import MaterialSwitch from "@material-ui/core/Switch";
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
        control={
          <MaterialSwitch checked={value} onChange={onChange} color="primary" />
        }
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
      {state && state.from && (
        <Switch location={state.from}>
          <Route exact path="/restore-prevented-route/books">
            <h3 className={styles.nextBooks}>The next page is Books!</h3>
          </Route>
          <Route exact path="/restore-prevented-route/food">
            <h3 className={styles.nextFood}>The next page is Food!</h3>
          </Route>
        </Switch>
      )}
    </FormControl>
  );
};

export default Login;
