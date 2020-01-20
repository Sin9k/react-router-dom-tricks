import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const Enging = () => {
  return (
    <FormControl component="fieldset">
      <FormGroup>
        <FormControlLabel
          control={<Checkbox value="2-cylinders" />}
          label="2 Cylinders"
        />
        <FormControlLabel
          control={<Checkbox value="3-cylinders" />}
          label="3 Cylinders"
        />
        <FormControlLabel
          control={<Checkbox value="4-cylinders" />}
          label="4 Cylinders"
        />
        <FormControlLabel
          control={<Checkbox value="5-cylinders" />}
          label="5 Cylinders"
        />
        <FormControlLabel
          control={<Checkbox value="6-cylinders" />}
          label="6 Cylinders"
        />
      </FormGroup>
    </FormControl>
  );
};

export default Enging;
