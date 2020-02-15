import React from "react";
import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import usePrepareLink from "~/hooks/router/usePrepareLink";
import { GET_PARAMS } from "~/const/router";

import useStyles from "./styles";

const NotificationsItem = ({ notification }) => {
  const styles = useStyles();

  const link = usePrepareLink({
    query: {
      [GET_PARAMS.notificationId]: notification.id
    },
    keepOldQuery: true
  });

  return (
    <ListItem
      alignItems="flex-start"
      component={Link}
      to={link}
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
  );
};

export default NotificationsItem;
