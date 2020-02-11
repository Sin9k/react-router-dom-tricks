import React from "react";

import useGetPopupState from "./hooks/useGetPopupState";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Notifications from "./Notifications";

const popups = {
  "sign-in": SignIn,
  "sign-up": SignUp,
  notifications: Notifications
};

const GetParameterPopups = () => {
  const { mountedPopup, isOpened } = useGetPopupState();

  const Component = popups[mountedPopup];

  if (!Component) {
    return null;
  }

  return <Component isOpened={isOpened} />;
};

export default GetParameterPopups;
