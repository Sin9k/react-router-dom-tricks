import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Dialog from "@material-ui/core/Dialog";

import { GET_PARAMS } from "~/const/router";
import useGetParameter from "~/hooks/router/useGetParameter";
import NotificationsList from "./NotificationsList";
import NotificationDetails from "./NotificationDetails";
import useStyles from "./styles";

const Notifications = ({ isOpened }) => {
  const notificationId = useGetParameter(GET_PARAMS.notificationId);
  const history = useHistory();
  const [id, setId] = useState(notificationId);
  const styles = useStyles();

  useEffect(() => {
    if (notificationId) {
      setId(notificationId);
    }
  }, [notificationId]);

  return (
    <Dialog
      onClose={history.goBack}
      open={Boolean(isOpened)}
      classes={{
        paperWidthSm: styles.dialog
      }}
    >
      <div className={styles.container}>
        <NotificationsList />
        {id && <NotificationDetails notificationId={id} />}
      </div>
    </Dialog>
  );
};

export default Notifications;
