import React from "react";
import { Route, Redirect } from "react-router-dom";

import usePrepareLink from "~/hooks/router/usePrepareLink";

const AuthRoute = ({ children, isAuthorized, ...rest }) => {
  const loginLink = usePrepareLink({
    to: "/login",
    isRelativePath: true
  });

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthorized ? (
          children
        ) : (
          <Redirect
            to={{
              ...loginLink,
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default AuthRoute;
