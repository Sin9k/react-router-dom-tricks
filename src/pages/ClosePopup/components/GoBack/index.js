import React from "react";
import { Route, Link, useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import usePrepareLink from "~/hooks/router/usePrepareLink";

const GoBack = ({ dialogClassName }) => {
  const history = useHistory();

  const goBackLink = usePrepareLink({
    to: "/history-go-back",
    isRelativePath: true
  });

  return (
    <>
      <h3>call history.goBack() by close - </h3>
      <div>
        <Button variant="contained" component={Link} to={goBackLink}>
          history.goBack
        </Button>
        <Route
          path={goBackLink.pathname}
          children={({ match }) => {
            return (
              <Dialog onClose={history.goBack} open={Boolean(match)}>
                <div className={dialogClassName}>history.goBack</div>
              </Dialog>
            );
          }}
        />
      </div>
    </>
  );
};

export default GoBack;
