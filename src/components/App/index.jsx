import React from "react";
import { Provider } from "react-redux";

import createStore from "~/store";

import Router from "../Router";
import DeviceInfoHandler from "../DeviceInfoHandler";
import useStyles from "./styles";

const { store } = createStore();
function App() {
  const styles = useStyles();

  return (
    <Provider store={store}>
      <DeviceInfoHandler>
        <div className={styles.container}>
          <Router />
        </div>
      </DeviceInfoHandler>
    </Provider>
  );
}

export default App;
