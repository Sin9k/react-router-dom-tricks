import React, { useCallback } from "react";
import { useHistory, useRouteMatch, Link, Route } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import usePrepareLink from "~/hooks/router/usePrepareLink";

const Push = ({ dialogClassName }) => {
  const match = useRouteMatch();
  const history = useHistory();

  const pushLink = usePrepareLink({
    to: "/push",
    isRelativePath: true
  });

  const goBack = useCallback(() => {
    history.push(match.url);
  }, [history, match.url]);

  return (
    <>
      <h3>call push() to previous route by close - </h3>
      <div>
        <Button variant="contained" component={Link} to={pushLink}>
          Push
        </Button>
        <Route
          path={pushLink.pathname}
          children={({ match }) => {
            return (
              <Dialog onClose={goBack} open={Boolean(match)}>
                <div className={dialogClassName}>Push</div>
              </Dialog>
            );
          }}
        />
      </div>
    </>
  );
};

export default Push;
