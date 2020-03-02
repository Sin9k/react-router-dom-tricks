import React from "react";

import GoBack from "../GoBack";
import useStyles from "./styles";

const ClosePopupPage = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <GoBack dialogClassName={styles.dialog} />
    </div>
  );
};

export default ClosePopupPage;
