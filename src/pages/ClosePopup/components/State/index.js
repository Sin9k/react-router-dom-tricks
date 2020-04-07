import React from "react";
import { Link, Route } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import usePreparePopupLink from "./hooks/usePreparePopupLink";
import useClosePopup from "./hooks/useClosePopup";

const State = ({ dialogClassName }) => {
  const stateLink = usePreparePopupLink({
    to: "/state",
    isRelativePath: true
  });

  const closePopup = useClosePopup();

  return (
    <>
      <h3>use state to detect goBack or replace by close - </h3>
      <div>
        <Button variant="contained" component={Link} to={stateLink}>
          State
        </Button>
        <Route
          path={stateLink.pathname}
          children={({ match }) => {
            return (
              <Dialog onClose={closePopup} open={Boolean(match)}>
                <div className={dialogClassName}>State</div>
              </Dialog>
            );
          }}
        />
      </div>
    </>
  );
};

export default State;
