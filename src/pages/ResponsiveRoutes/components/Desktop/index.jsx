import React from "react";

import List from "../List";
import Sidebar from "../Sidebar";
import useStyles from "./styles";

const Desktop = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.list}>
        <List />
      </div>
    </div>
  );
};

export default Desktop;
