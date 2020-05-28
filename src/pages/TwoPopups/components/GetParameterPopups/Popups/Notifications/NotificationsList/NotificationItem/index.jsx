import React from "react";
import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import usePrepareLink from "~/hooks/router/usePrepareLink";
import { GET_PARAMS, GET_ENUMS } from "~/const/router";

import useStyles from "./styles";

const NotificationsItem = ({ notification }) => {
  const styles = useStyles();

  const link = usePrepareLink({
    query: {
      [GET_PARAMS.notificationId]: notification.id,
    },
    pushToQuery: {
      [GET_PARAMS.popup]: GET_ENUMS.popup.notificationDetails,
    },
    keepOldQuery: true,
  });

  return (
    <ListItem
      alignItems="flex-start"
      component={Link}
      to={link}
      className={styles.item}
    >
      <ListItemAvatar>
        <Avatar
          alt={notification.title}
          src={notification.avatar}
          className={styles.avatar}
        />
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
            <br />
            {notification.shortText}
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default NotificationsItem;
