import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useCallback } from "react";

import * as historyActions from "~/actions/history";

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();

  return useCallback(
    link => {
      history.replace(link);
      dispatch(historyActions.replace(link));
    },
    [history, dispatch]
  );
};
