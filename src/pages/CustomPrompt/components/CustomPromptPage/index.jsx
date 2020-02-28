import React, { useContext } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Dialog from "@material-ui/core/Dialog";

import DeviceInfoContext from "~/contexts/DeviceInfoContext";

import SignUpButton from "../SignUpButton";
import SignUpForm from "../SignUpForm";
import useStyles from "./styles";

const CustomPromptPage = () => {
  const styles = useStyles();
  const deviceInfo = useContext(DeviceInfoContext);
  const history = useHistory();

  return (
    <div className={styles.container}>
      {deviceInfo.isMobile ? (
        <Switch>
          <Route exact path="/custom-prompt">
            <SignUpButton />
          </Route>
          <Route path="/custom-prompt/sign-up">
            <SignUpForm />
          </Route>
        </Switch>
      ) : (
        <>
          <Route path="/custom-prompt">
            <SignUpButton />
          </Route>
          <Route
            path="/custom-prompt/sign-up"
            children={({ match }) => {
              return (
                <Dialog onClose={history.goBack} open={Boolean(match)}>
                  <SignUpForm />
                </Dialog>
              );
            }}
          />
        </>
      )}
    </div>
  );
};

export default CustomPromptPage;
