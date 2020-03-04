import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";

import * as historySelectors from "../selectors/history";

import useGoBack from "./useGoBack";
import useReplace from "./useReplace";

export default () => {
  const hasPrevRoute = useSelector(state => {
    return historySelectors.getHasPrevRoute(state);
  });

  const match = useRouteMatch();
  const goBack = useGoBack();
  const replace = useReplace();

  return useCallback(() => {
    if (hasPrevRoute) {
      goBack();
    } else {
      replace(match.url);
    }
  }, [goBack, replace, match.url, hasPrevRoute]);
};
