import React, { useContext } from "react";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";

import AppBar from "~/components/AppBar";
import DeviceInfoContext from "~/contexts/DeviceInfoContext";

import Desktop from "../Desktop";

const ResponsiveList = () => <div>ResponsiveList</div>;
const ResponsiveFilter = () => <div>ResponsiveFilter</div>;

const ResponsiveRoutesPage = ({ match }) => {
  const { url } = match;

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
          <Route exact path={`${url}/list`}>
            <ResponsiveList />
          </Route>
          <Route exact path={`${url}/filter`}>
            <ResponsiveFilter />
          </Route>
          <Redirect to={`${url}/list`} />
        </Switch>
      )}
    </>
  );
};

export default withRouter(ResponsiveRoutesPage);
