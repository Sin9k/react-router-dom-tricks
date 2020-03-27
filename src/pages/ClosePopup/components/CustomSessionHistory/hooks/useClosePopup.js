import { useCallback } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

import getHasPrevRoute from "../services/getHasPrevRoute";

export default () => {
  const history = useHistory();
  const match = useRouteMatch();

  const hasPrevRoute = getHasPrevRoute();

  return useCallback(() => {
    if (hasPrevRoute) {
      history.goBack();
    } else {
      history.replace(match.url);
    }
  }, [history, match.url, hasPrevRoute]);
};
