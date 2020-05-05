/* global sessionStorage */
import { STEPPER_FORM_DATA_KEY } from "../constants";

export default () => {
  sessionStorage.removeItem(STEPPER_FORM_DATA_KEY);
};
