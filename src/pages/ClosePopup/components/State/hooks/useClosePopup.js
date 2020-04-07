import { useCallback } from "react";
import { useRouteMatch, useLocation, useHistory } from "react-router-dom";

export default () => {
  const { state } = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  return useCallback(() => {
    if (state && state.hasPrevRoute) {
      history.goBack();
    } else {
      history.replace(match.url);
    }
  }, [state, history, match.url]);
};
