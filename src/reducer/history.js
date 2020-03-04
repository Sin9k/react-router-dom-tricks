import { handleActions } from "redux-actions";

import * as historyActions from "~/actions/history";

const defaultState = [];

export default handleActions(
  {
    [historyActions.push]: (state, action) => {
      return [...state, action.payload];
    },
    [historyActions.replace]: (state, action) => {
      if (state.length === 0) {
        return state;
      }

      return [...state.slice(0, -1), action.payload];
    },
    [historyActions.goBack]: state => {
      return state.slice(0, -1);
    }
  },
  defaultState
);
