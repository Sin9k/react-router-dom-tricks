import React from "react";

import Router from "../Router";
import useStyles from "./styles";

function App() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Router />
    </div>
  );
}

export default App;
