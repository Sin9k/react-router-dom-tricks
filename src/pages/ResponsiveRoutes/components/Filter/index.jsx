import React from "react";

import Body from "./Body";
import Enging from "./Enging";
import Make from "./Make";
import Model from "./Model";
import Miles from "./Miles";
import Year from "./Year";
import useStyles from "./styles";

const TypeComponent = {
  body: Body,
  enging: Enging,
  make: Make,
  model: Model,
  miles: Miles,
  year: Year
};

const Filter = ({ type }) => {
  const styles = useStyles();

  const Component = TypeComponent[type];

  return <div className={styles.container}>{<Component />}</div>;
};

export default Filter;
