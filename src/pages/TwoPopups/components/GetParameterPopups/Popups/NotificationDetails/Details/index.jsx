/*global parseInt */
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import notifications from "../../../../../data/notifications";
import useStyles from "./styles";

const Details = ({ notificationId }) => {
  const styles = useStyles();

  const notification = notifications.find(
    (notification) => parseInt(notificationId) === notification.id
  );

  if (!notification) {
    return null;
  }

  return (
    <Card className={styles.container}>
      <CardContent>
        <Avatar
          alt={notification.title}
          src={notification.avatar}
          className={styles.large}
        />
        <Typography variant="h5" component="h2" className={styles.title}>
          {notification.title}
        </Typography>
        <Typography variant="h5" component="h2" className={styles.title}>
          {notification.user}
        </Typography>
        <Typography variant="body2" component="p">
          {notification.fullText}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Details;
