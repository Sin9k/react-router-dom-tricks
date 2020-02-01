import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

import ApplicationBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FormatListBulleted from "@material-ui/icons/FormatListBulleted";

import useStyles from "./styles";
import { TRICKS_ROUTES } from "~/const/tricks";

const AppBar = () => {
  const styles = useStyles();
  const [isOpenedDrawer, setIsOpenedDrawer] = useState(false);

  const toggleDrawer = useCallback(() => {
    setIsOpenedDrawer(!isOpenedDrawer);
  }, [isOpenedDrawer]);

  return (
    <>
      <ApplicationBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={styles.menuButton}
            color="inherit"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            className={styles.title}
            component={Link}
            to="/"
          >
            Web Site
          </Typography>
        </Toolbar>
      </ApplicationBar>
      <Drawer open={isOpenedDrawer} onClose={toggleDrawer}>
        <div className={styles.list} onClick={toggleDrawer}>
          <List>
            <ListItem button component={Link} to="/">
              <ListItemIcon>
                <FormatListBulleted />
              </ListItemIcon>
              <ListItemText primary="React Router Tricks" />
            </ListItem>
            {TRICKS_ROUTES.map(trick => (
              <ListItem button key={trick.url} component={Link} to={trick.url}>
                <ListItemIcon>
                  <trick.Icon />
                </ListItemIcon>
                <ListItemText primary={trick.title} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default AppBar;
