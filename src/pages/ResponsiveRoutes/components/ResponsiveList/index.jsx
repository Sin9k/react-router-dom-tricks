import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Button from "@material-ui/core/Button";

import List from "../List";
import useStyles from "./styles";

const ResponsiveList = () => {
  const styles = useStyles();
  const { url } = useRouteMatch();

  return (
    <div className={styles.container}>
      <Button
        className={styles.filters}
        component={Link}
        to={url.replace("list", "filters")}
        variant="contained"
        color="secondary"
      >
        Go To Filters
      </Button>
      <List />
    </div>
  );
};

export default ResponsiveList;
