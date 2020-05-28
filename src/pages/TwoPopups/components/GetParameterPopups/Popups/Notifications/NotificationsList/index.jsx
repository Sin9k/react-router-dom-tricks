import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import notifications from "../../../../../data/notifications";
import NotificationItem from "./NotificationItem";
import useStyles from "./styles";

const NotificationsList = () => {
  const styles = useStyles();
  const history = useHistory();

  return (
    <div className={styles.container}>
      <IconButton onClick={history.goBack} className={styles.close}>
        <CloseIcon />
      </IconButton>
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
    </div>
  );
};

export default NotificationsList;
