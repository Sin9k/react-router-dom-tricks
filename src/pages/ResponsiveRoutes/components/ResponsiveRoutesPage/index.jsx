import React, { useContext } from "react";
import { useRouteMatch, Switch, Route, Redirect } from "react-router-dom";

import AppBar from "~/components/AppBar";
import DeviceInfoContext from "~/contexts/DeviceInfoContext";

import Desktop from "../Desktop";
import ResponsiveList from "../ResponsiveList";

const ResponsiveFilter = () => <div>ResponsiveFilter</div>;

const ResponsiveRoutesPage = () => {
  const { url } = useRouteMatch();

  const deviceInfo = useContext(DeviceInfoContext);
  return (
    <>
      <AppBar />
      {deviceInfo.isDesktop ? (
        <Switch>
          <Route exact path={`${url}`}>
            <Desktop />
          </Route>
          <Redirect to={`${url}`} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path={`${url}/filters`}>
            <ResponsiveFilter />
          </Route>
          <Route exact path={`${url}/list`}>
            <ResponsiveList />
          </Route>
          <Redirect to={`${url}/list`} />
        </Switch>
      )}
    </>
  );
};

export default ResponsiveRoutesPage;
