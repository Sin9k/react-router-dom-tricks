import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "~/pages/Home";
import ResponsiveRoutes from "~/pages/ResponsiveRoutes";
import PopupsRoutes from "~/pages/PopupsRoutes";

import AppBar from "../AppBar";

const Router = () => {
  return (
    <BrowserRouter>
      <AppBar />
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
