import React from "react";
import { useHistory } from "react-router-dom";

import Dialog from "@material-ui/core/Dialog";

import NotificationsList from "./NotificationsList";

const Notifications = ({ isOpened }) => {
  const history = useHistory();

  return (
    <Dialog onClose={history.goBack} open={Boolean(isOpened)} fullScreen>
      <NotificationsList />
    </Dialog>
  );
};

export default Notifications;
