import React from "react";
import Slider from "@material-ui/core/Slider";

import useStyles from "./styles";

const Year = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Slider
        defaultValue={0}
        getAriaValueText={value => `${value} Year`}
        valueLabelDisplay="on"
        step={1}
        marks
        min={1990}
        max={2020}
      />
    </div>
  );
};

export default Year;
