/* global sessionStorage */
import { CUSTOM_SESSION_KEY } from "../constants";

export default () => {
  sessionStorage.removeItem(CUSTOM_SESSION_KEY);
};
