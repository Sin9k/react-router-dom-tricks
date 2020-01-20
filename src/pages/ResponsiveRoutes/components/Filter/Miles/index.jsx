import React from "react";
import Slider from "@material-ui/core/Slider";

import useStyles from "./styles";

const Miles = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Slider
        defaultValue={30}
        getAriaValueText={value => `${value} miles`}
        valueLabelDisplay="on"
        step={10}
        marks
        min={0}
        max={1000}
      />
    </div>
  );
};

export default Miles;
