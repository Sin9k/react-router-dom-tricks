import React, { useCallback } from "react";
import { Route } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import usePrepareLink from "~/hooks/router/usePrepareLink";

import useClosePopup from "./hooks/useClosePopup";
import usePush from "./hooks/usePush";

const CustomReduxHistory = ({ dialogClassName }) => {
  const customReduxHistoryLink = usePrepareLink({
    to: "/custom-redux-history",
    isRelativePath: true
  });

  const closePopup = useClosePopup();
  const push = usePush();

  const openPopup = useCallback(() => {
    push(customReduxHistoryLink);
  }, [push, customReduxHistoryLink]);

  return (
    <>
      <h3>use custom history to detect goBack or replace by close - </h3>
      <div>
        <Button variant="contained" onClick={openPopup}>
          Redux history
        </Button>
        <Route
          path={customReduxHistoryLink.pathname}
          children={({ match }) => (
            <Dialog onClose={closePopup} open={Boolean(match)}>
              <div className={dialogClassName}>Redux History</div>
            </Dialog>
          )}
        />
      </div>
    </>
  );
};

export default CustomReduxHistory;
