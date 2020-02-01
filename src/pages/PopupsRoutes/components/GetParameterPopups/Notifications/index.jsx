import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";

import useGetNotificationId from "../../../hooks/useGetNotificationId";
import NotificationsList from "./NotificationsList";
import NotificationDetails from "./NotificationDetails";
import useStyles from "./styles";

const Notifications = ({ history, isOpened }) => {
  const notificationId = useGetNotificationId();
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

export default withRouter(Notifications);
