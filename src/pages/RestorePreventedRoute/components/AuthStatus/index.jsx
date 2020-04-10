import React from "react";
import PropTypes from "prop-types";

import useStyles from "./styles";

const AuthStatus = ({ isAuthorized }) => {
  const styles = useStyles();

  return isAuthorized ? (
    <h1 className={styles.authorized}>You are authorized</h1>
  ) : (
    <h1 className={styles.notAuthorized}>You are not authorized</h1>
  );
};

AuthStatus.propTypes = {
  isAuthorized: PropTypes.bool.isRequired
};

export default AuthStatus;
