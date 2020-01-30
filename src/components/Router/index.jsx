import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "~/pages/Home";
import ResponsiveRoutes from "~/pages/ResponsiveRoutes";
import PopupsRoutes from "~/pages/PopupsRoutes";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/responsive-routes">
          <ResponsiveRoutes />
        </Route>
        <Route path="/popups-routes">
          <PopupsRoutes />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
