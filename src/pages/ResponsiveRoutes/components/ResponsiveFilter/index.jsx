import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

import Filter from "../Filter";
import useStyles from "./styles";

const ResponsiveFilter = () => {
  const { type } = useParams();
  const styles = useStyles();
  const history = useHistory();

  return (
    <div>
      <Button
        className={styles.button}
        variant="contained"
        color="secondary"
        onClick={history.goBack}
      >
        Go Back
      </Button>
      <Filter type={type} />
    </div>
  );
};

export default ResponsiveFilter;
