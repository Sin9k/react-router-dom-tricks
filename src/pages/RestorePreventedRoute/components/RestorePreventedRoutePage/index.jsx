import React, { useState } from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";

import AuthRoute from "../AuthRoute";
import AuthStatus from "../AuthStatus";
import Links from "../Links";
import Gallery from "../Gallery";
import Books from "../Books";
import Login from "../Login";
import Food from "../Food";
import useStyles from "./styles";

const RestorePreventedRoutePage = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const { url } = useRouteMatch();
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <AuthStatus isAuthorized={isAuthorized} />
      <Links />
      <Switch>
        <Route exact path={url}>
          <h1 className={styles.title}>HOME PAGE</h1>
        </Route>
        <Route exact path={`${url}/gallery`}>
          <Gallery />
        </Route>
        <AuthRoute isAuthorized={isAuthorized} exact path={`${url}/books`}>
          <Books />
        </AuthRoute>
        <AuthRoute isAuthorized={isAuthorized} exact path={`${url}/food`}>
          <Food />
        </AuthRoute>
        <Route exact path={`${url}/login`}>
          <Login
            isAuthorized={isAuthorized}
            setIsAuthorized={setIsAuthorized}
          />
        </Route>
        <Redirect to={url} />
      </Switch>
    </div>
  );
};

export default RestorePreventedRoutePage;
