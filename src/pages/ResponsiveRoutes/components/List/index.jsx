import React from "react";

import Vehicles from "../../data/vehicles.json";
import useStyles from "./styles";

const List = () => {
  const styles = useStyles();

  return Vehicles.map(vehicle => {
    return (
      <div className={styles.container} key={vehicle.id}>
        <ul className={styles.list}>
          <li>make: {vehicle.make}</li>
          <li>model: {vehicle.model}</li>
          <li>year: {vehicle.year}</li>
          <li>engine: {vehicle.engine}</li>
          <li>miles: {vehicle.miles}</li>
          <li>bodyStyle: {vehicle.bodyStyle}</li>
        </ul>
      </div>
    );
  });
};

export default List;
