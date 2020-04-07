import { createSelector } from "reselect";

export const getHistory = state => state.history;

export const getHasPrevRoute = createSelector(
  getHistory,
  history => history.length > 0
);
