import React, { useContext } from "react";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";

import AppBar from "~/components/AppBar";
import DeviceInfoContext from "~/contexts/DeviceInfoContext";

import useStyles from "./styles";

const Desktop = () => <div>Desktop</div>;
const ResponsiveList = () => <div>ResponsiveList</div>;
const ResponsiveFilter = () => <div>ResponsiveFilter</div>;

const ResponsiveRoutesPage = ({ match }) => {
  const { url } = match;

  const styles = useStyles();
  const deviceInfo = useContext(DeviceInfoContext);

  return (
    <>
      <AppBar />
      <div className={styles.container}>
        <h2>Responsive Routes</h2>
      </div>
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
