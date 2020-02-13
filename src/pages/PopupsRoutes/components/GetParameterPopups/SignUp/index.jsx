import React from "react";
import { useHistory } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import useStyles from "./styles";

const SignUp = ({ isOpened }) => {
  const styles = useStyles();
  const history = useHistory();

  return (
    <Dialog onClose={history.goBack} open={Boolean(isOpened)}>
      <form noValidate autoComplete="off" className={styles.container}>
        <h2>Sign Up</h2>
        <TextField label="First Name" className={styles.field} />
        <TextField label="Last Name" className={styles.field} />
        <TextField label="Username" className={styles.field} />
        <TextField label="Password" className={styles.field} />
        <TextField label="Repeat Password" className={styles.field} />
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

export default SignUp;
