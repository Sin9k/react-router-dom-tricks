import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const Body = () => {
  return (
    <FormControl component="fieldset">
      <FormGroup>
        <FormControlLabel
          control={<Checkbox value="convertibles" />}
          label="Convertibles"
        />
        <FormControlLabel
          control={<Checkbox value="coupes" />}
          label="Coupes"
        />
        <FormControlLabel
          control={<Checkbox value="hatchbacks" />}
          label="Hatchbacks"
        />
        <FormControlLabel
          control={<Checkbox value="sedans" />}
          label="Sedans"
        />
        <FormControlLabel
          control={<Checkbox value="trucks" />}
          label="Trucks"
        />
      </FormGroup>
    </FormControl>
  );
};

export default Body;
