import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const Model = () => {
  return (
    <FormControl component="fieldset">
      <FormGroup>
        <FormControlLabel
          control={<Checkbox value="fusion-s" />}
          label="Fusion S"
        />
        <FormControlLabel
          control={<Checkbox value="focus-se" />}
          label="Focus SE"
        />
        <FormControlLabel
          control={<Checkbox value="fiesta-se" />}
          label="Fiesta SE"
        />
        <FormControlLabel
          control={<Checkbox value="taurus-se" />}
          label="Taurus SE"
        />
      </FormGroup>
    </FormControl>
  );
};

export default Model;
