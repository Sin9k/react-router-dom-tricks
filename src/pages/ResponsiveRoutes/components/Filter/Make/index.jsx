import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const Make = () => {
  return (
    <FormControl component="fieldset">
      <FormGroup>
        <FormControlLabel control={<Checkbox value="ford" />} label="Ford" />
        <FormControlLabel
          control={<Checkbox value="toyota" />}
          label="Toyota"
        />
        <FormControlLabel
          control={<Checkbox value="nissan" />}
          label="Nissan"
        />
        <FormControlLabel control={<Checkbox value="honda" />} label="Honda" />
      </FormGroup>
    </FormControl>
  );
};

export default Make;
