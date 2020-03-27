/* global sessionStorage */
import { CUSTOM_SESSION_KEY } from "../constants";

export default customHistory => {
  sessionStorage.setItem(CUSTOM_SESSION_KEY, JSON.stringify(customHistory));
};
