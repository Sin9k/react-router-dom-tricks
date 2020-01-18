import React from "react";

import ApplicationBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import useStyles from "./styles";

const AppBar = () => {
  const classes = useStyles();

  return (
    <ApplicationBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Web Site
        </Typography>
      </Toolbar>
    </ApplicationBar>
  );
};

export default AppBar;
