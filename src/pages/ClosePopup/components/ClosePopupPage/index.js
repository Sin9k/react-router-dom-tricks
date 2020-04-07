import React from "react";

import GoBack from "../GoBack";
import Push from "../Push";
import CustomSessionHistory from "../CustomSessionHistory";
import CustomReduxHistory from "../CustomReduxHistory";
import State from "../State";
import useStyles from "./styles";

const ClosePopupPage = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <GoBack dialogClassName={styles.dialog} />
      <Push dialogClassName={styles.dialog} />
      <CustomSessionHistory dialogClassName={styles.dialog} />
      <CustomReduxHistory dialogClassName={styles.dialog} />
      <State dialogClassName={styles.dialog} />
    </div>
  );
};

export default ClosePopupPage;
