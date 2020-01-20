import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "~/pages/Home";
import ResponsiveRoutes from "~/pages/ResponsiveRoutes";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/responsive-routes">
          <ResponsiveRoutes />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
