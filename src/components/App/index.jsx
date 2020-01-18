import React from "react";

import Router from "../Router";
import DeviceInfoHandler from "../DeviceInfoHandler";
import useStyles from "./styles";

function App() {
  const styles = useStyles();

  return (
    <DeviceInfoHandler>
      <div className={styles.container}>
        <Router />
      </div>
    </DeviceInfoHandler>
  );
}

export default App;
