import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";

import { GET_PARAMS } from "~/const/router";
import useGetParameter from "~/hooks/router/useGetParameter";

import Details from "./Details";

const NotificationDetails = ({ isOpened }) => {
  const history = useHistory();
  const queryNotificationId = useGetParameter(GET_PARAMS.notificationId);
  const [notificationId, setNotificationId] = useState(
    Number(queryNotificationId)
  );

  useEffect(() => {
    if (queryNotificationId) {
      setNotificationId(Number(queryNotificationId));
    }
  }, [queryNotificationId]);

  return (
    <Dialog
      onClose={history.goBack}
      open={queryNotificationId && Boolean(isOpened)}
    >
      <Details notificationId={notificationId} />
    </Dialog>
  );
};

export default NotificationDetails;
