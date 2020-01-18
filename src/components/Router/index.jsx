import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AppBar from "../../components/AppBar";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <AppBar />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
