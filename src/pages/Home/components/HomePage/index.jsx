import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import { TRICKS_ROUTES } from "~/const/tricks";
import useStyles from "./styles";

const HomePage = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <h2>React Router Tricks</h2>
      <ul>
        {TRICKS_ROUTES.map(trick => {
          return (
            <li key={trick.url}>
              <Button component={Link} to={trick.url} color="primary">
                {trick.title}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;
