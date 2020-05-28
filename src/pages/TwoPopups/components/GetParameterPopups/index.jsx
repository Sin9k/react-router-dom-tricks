import React from "react";

import { GET_ENUMS } from "~/const/router";

import useGetPopupState from "./hooks/useGetPopupState";
import SignIn from "./Popups/SignIn";
import SignUp from "./Popups/SignUp";
import Notifications from "./Popups/Notifications";
import NotificationDetails from "./Popups/NotificationDetails";

const mappedPopups = {
  [GET_ENUMS.popup.signIn]: SignIn,
  [GET_ENUMS.popup.signUp]: SignUp,
  [GET_ENUMS.popup.notifications]: Notifications,
  [GET_ENUMS.popup.notificationDetails]: NotificationDetails,
};

const GetParameterPopups = () => {
  const { mountedPopups, popups } = useGetPopupState();

  return mountedPopups.map((mountedPopup) => {
    const Component = mappedPopups[mountedPopup];

    if (!Component) {
      return null;
    }

    return (
      <Component key={mountedPopup} isOpened={popups.includes(mountedPopup)} />
    );
  });
};

export default GetParameterPopups;
