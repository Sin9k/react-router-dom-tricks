import React from "react";
import { useHistory } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import useStyles from "./styles";

const SignIn = ({ isOpened }) => {
  const styles = useStyles();
  const history = useHistory();

  return (
    <Dialog onClose={history.goBack} open={isOpened}>
      <form noValidate autoComplete="off" className={styles.container}>
        <h2>Sign In</h2>
        <TextField label="Username" className={styles.field} />
        <TextField label="Password" className={styles.field} />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          onClick={history.goBack}
        >
          Send
        </Button>
      </form>
    </Dialog>
  );
};

export default SignIn;
