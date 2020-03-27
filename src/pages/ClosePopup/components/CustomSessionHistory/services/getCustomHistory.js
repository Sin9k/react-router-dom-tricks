/* global sessionStorage */
import { CUSTOM_SESSION_KEY } from "../constants";

export default () => {
  const rawCustomHistory = sessionStorage.getItem(CUSTOM_SESSION_KEY);

  if (!rawCustomHistory) {
    return [];
  }

  return JSON.parse(rawCustomHistory);
};
