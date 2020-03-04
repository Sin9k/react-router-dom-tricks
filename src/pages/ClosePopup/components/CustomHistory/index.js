import React, { useCallback } from "react";
import { Route } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import usePrepareLink from "~/hooks/router/usePrepareLink";

import useClosePopup from "./hooks/useClosePopup";
import usePush from "./hooks/usePush";

const CustomHistory = ({ dialogClassName }) => {
  const customHistoryLink = usePrepareLink({
    to: "/custom-history",
    isRelativePath: true
  });

  const closePopup = useClosePopup();
  const push = usePush();

  const openPopup = useCallback(() => {
    push(customHistoryLink);
  }, [push, customHistoryLink]);

  return (
    <>
      <h3>use custom history to detect goBack or replace by close - </h3>
      <div>
        <Button variant="contained" onClick={openPopup}>
          Custom history
        </Button>
        <Route
          path={customHistoryLink.pathname}
          children={({ match }) => {
            return (
              <Dialog onClose={closePopup} open={Boolean(match)}>
                <div className={dialogClassName}>Custom History</div>
              </Dialog>
            );
          }}
        />
      </div>
    </>
  );
};

export default CustomHistory;
