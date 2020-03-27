import React from "react";
import { Route, Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import usePrepareLink from "~/hooks/router/usePrepareLink";

import useClosePopup from "./hooks/useClosePopup";
import HistoryLogger from "./HistoryLogger";

const CustomSessionHistory = ({ dialogClassName }) => {
  const customSessionHistoryLink = usePrepareLink({
    to: "/custom-session-history",
    isRelativePath: true
  });

  const closePopup = useClosePopup();

  return (
    <>
      <HistoryLogger />
      <h3>use custom history to detect goBack or replace by close - </h3>
      <div>
        <Button
          variant="contained"
          component={Link}
          to={customSessionHistoryLink}
        >
          Session History
        </Button>
        <Route
          path={customSessionHistoryLink.pathname}
          children={({ match }) => {
            return (
              <Dialog onClose={closePopup} open={Boolean(match)}>
                <div className={dialogClassName}>Session History</div>
              </Dialog>
            );
          }}
        />
      </div>
    </>
  );
};

export default CustomSessionHistory;
