import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRouteMatch, useHistory } from "react-router-dom";

import useStyles from "./styles";

const OriginalImage = ({ pictures }) => {
  const styles = useStyles();
  const match = useRouteMatch();
  const history = useHistory();
  const [id] = useState(match && Number(match.params.id));

  const picture = pictures.find((picture) => picture.id === id);

  if (!picture) {
    return null;
  }

  return (
    <button onClick={history.goBack} className={styles.container}>
      <img src={picture.url} width={700} height={400} alt="original" />
    </button>
  );
};

OriginalImage.propTypes = {
  pictures: PropTypes.array.isRequired,
};

export default OriginalImage;
