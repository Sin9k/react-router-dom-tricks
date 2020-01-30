import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";

import AppBar from "~/components/AppBar";

import Posts from "../Posts";
import Post from "../Post";

const ResponsiveRoutesPage = () => {
  const { url } = useRouteMatch();

  return (
    <>
      <AppBar />
      <Switch>
        <Route path={`${url}/posts/:id`}>
          <Post />
        </Route>
        <Route path={`${url}/posts`}>
          <Posts />
        </Route>
        <Redirect to={`${url}/posts`} />
      </Switch>
    </>
  );
};

export default ResponsiveRoutesPage;
