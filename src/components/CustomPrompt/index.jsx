/* global JSON */
import React from "react";

import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

const CustomPrompt = ({ message, cleanUp }) => {
  const parsedMessage = JSON.parse(message);

  const cancel = () => cleanUp(false);
  const ok = () => cleanUp(true);

  return (
    <Dialog open onClose={cancel}>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          If you leave the page, the following data will be lost:
        </DialogContentText>
        <ul>
          {Object.entries(parsedMessage.fields).map(([key, value]) => {
            return (
              <li key={key}>
                <b>{key}:</b> {value}
              </li>
            );
          })}
        </ul>
      </DialogContent>
      <DialogActions>
        <Button onClick={cancel} color="primary">
          Cancel
        </Button>
        <Button onClick={ok} color="primary" autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomPrompt;
