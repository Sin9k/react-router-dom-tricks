import React, { Fragment } from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import notifications from "../../../../data/notifications";
import NotificationItem from "./NotificationItem";
import useStyles from "./styles";

const NotificationsList = () => {
  const styles = useStyles();

  return (
    <List className={styles.root}>
      {notifications.map((notification, index, notifications) => {
        const isLastNotification = notifications.length - 1 !== index;

        return (
          <Fragment key={notification.id}>
            <NotificationItem notification={notification} />
            {isLastNotification && <Divider variant="inset" component="li" />}
          </Fragment>
        );
      })}
    </List>
  );
};

export default NotificationsList;
