import React, { useContext } from "react";
import { useRouteMatch, Switch, Route, Redirect } from "react-router-dom";

import DeviceInfoContext from "~/contexts/DeviceInfoContext";

import Desktop from "../Desktop";
import ResponsiveList from "../ResponsiveList";
import ResponsiveFilters from "../ResponsiveFilters";
import ResponsiveFilter from "../ResponsiveFilter";

const ResponsiveRoutesPage = () => {
  const { url } = useRouteMatch();

  const deviceInfo = useContext(DeviceInfoContext);
  return deviceInfo.isDesktop ? (
    <Switch>
      <Route exact path={url}>
        <Desktop />
      </Route>
      <Redirect to={url} />
    </Switch>
  ) : (
    <Switch>
      <Route exact path={`${url}/filters/:type`}>
        <ResponsiveFilter />
      </Route>
      <Route exact path={`${url}/filters`}>
        <ResponsiveFilters />
      </Route>
      <Route exact path={`${url}/list`}>
        <ResponsiveList />
      </Route>
      <Redirect to={`${url}/list`} />
    </Switch>
  );
};

export default ResponsiveRoutesPage;
