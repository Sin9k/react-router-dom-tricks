import React from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

import useStyles from "./styles";

const ResponsiveFilters = () => {
  const styles = useStyles();
  const { url } = useRouteMatch();
  const history = useHistory();

  return (
    <>
      <Button
        className={styles.button}
        variant="contained"
        color="secondary"
        onClick={history.goBack}
      >
        Go Back
      </Button>
      <h4 className={styles.title}>Filters</h4>
      <List className={styles.container}>
        <ListItem component={Link} to={`${url}/make`}>
          <ListItemText primary="Make" />
        </ListItem>
        <Divider />
        <ListItem component={Link} to={`${url}/model`}>
          <ListItemText primary="Model" />
        </ListItem>
        <Divider />
        <ListItem component={Link} to={`${url}/year`}>
          <ListItemText primary="Year" />
        </ListItem>
        <Divider />
        <ListItem component={Link} to={`${url}/enging`}>
          <ListItemText primary="Enging" />
        </ListItem>
        <Divider />
        <ListItem component={Link} to={`${url}/miles`}>
          <ListItemText primary="Miles" />
        </ListItem>
        <Divider />
        <ListItem component={Link} to={`${url}/body`}>
          <ListItemText primary="Body Styles" />
        </ListItem>
      </List>
    </>
  );
};

export default ResponsiveFilters;
