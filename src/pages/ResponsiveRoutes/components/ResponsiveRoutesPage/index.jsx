import React from "react";

import AppBar from "~/components/AppBar";

import useStyles from "./styles";

const ResponsiveRoutesPage = props => {
  const styles = useStyles();

  return (
    <>
      <AppBar />
      <div className={styles.container}>
        <h2>Responsive Routes</h2>
      </div>
    </>
  );
};

export default ResponsiveRoutesPage;
