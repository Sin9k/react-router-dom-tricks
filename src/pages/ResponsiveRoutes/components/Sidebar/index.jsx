import React, { useState, useCallback } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Popover from "@material-ui/core/Popover";
import Divider from "@material-ui/core/Divider";

import Filter from "../Filter";
import useStyles from "./styles";

const Sidebar = () => {
  const styles = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [type, setType] = useState(null);

  const handleClick = useCallback(
    type => event => {
      setAnchorEl(event.currentTarget);
      setType(type);
    },
    []
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <>
      <h4 className={styles.title}>Filters</h4>
      <List className={styles.container}>
        <ListItem button onClick={handleClick("make")}>
          <ListItemText primary="Make" />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleClick("model")}>
          <ListItemText primary="Model" />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleClick("year")}>
          <ListItemText primary="Year" />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleClick("enging")}>
          <ListItemText primary="Enging" />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleClick("miles")}>
          <ListItemText primary="Miles" />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleClick("body")}>
          <ListItemText primary="Body Styles" />
        </ListItem>
      </List>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left"
        }}
      >
        <Filter type={type} />
      </Popover>
    </>
  );
};

export default Sidebar;
