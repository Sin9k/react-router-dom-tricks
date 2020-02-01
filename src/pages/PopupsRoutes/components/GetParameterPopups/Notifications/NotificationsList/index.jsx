import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import notifications from "../../../../data/notifications";
import useStyles from "./styles";

const NotificationsList = () => {
  const styles = useStyles();
  const { search, pathname } = useLocation();

  return (
    <List className={styles.root}>
      {notifications.map((notification, index, notifications) => {
        const isLastNotification = notifications.length - 1 !== index;
        const query = new URLSearchParams(search);
        query.set("notification_id", notification.id);

        return (
          <Fragment key={notification.id}>
            <ListItem
              alignItems="flex-start"
              component={Link}
              to={`${pathname}?${query.toString()}`}
              className={styles.item}
              replace
            >
              <ListItemAvatar>
                <Avatar alt={notification.title} src={notification.image} />
              </ListItemAvatar>
              <ListItemText
                primary={notification.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={styles.inline}
                      color="textPrimary"
                    >
                      {notification.user}
                    </Typography>
                    {notification.shortText}
                  </React.Fragment>
                }
              />
            </ListItem>
            {isLastNotification && <Divider variant="inset" component="li" />}
          </Fragment>
        );
      })}
    </List>
  );
};

export default NotificationsList;
