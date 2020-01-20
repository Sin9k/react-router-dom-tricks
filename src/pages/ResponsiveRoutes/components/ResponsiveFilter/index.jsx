import React from "react";
import { useParams, withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

import Filter from "../Filter";
import useStyles from "./styles";

const ResponsiveFilter = ({ history }) => {
  const { type } = useParams();
  const styles = useStyles();

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

export default withRouter(ResponsiveFilter);
