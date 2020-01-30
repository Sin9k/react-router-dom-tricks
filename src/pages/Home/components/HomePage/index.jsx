import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import AppBar from "~/components/AppBar";

import useStyles from "./styles";

const HomePage = () => {
  const styles = useStyles();

  return (
    <>
      <AppBar />
      <div className={styles.container}>
        <h2>React Router Tricks</h2>
        <ul>
          <li>
            <Button component={Link} to="/responsive-routes" color="primary">
              Responsive Routes
            </Button>
          </li>
          <li>
            <Button component={Link} to="/popups-routes" color="primary">
              Popups Routes
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomePage;
