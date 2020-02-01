/* global clearTimeout */
import React, { useState, useEffect, useMemo } from "react";

import useGetPopupName from "../../hooks/useGetPopupName";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Notifications from "./Notifications";

let timeout;

const GetParameterPopups = () => {
  const popupName = useGetPopupName();
  const [mountedPopup, setMountedPopup] = useState(popupName);

  useEffect(() => {
    if (popupName) {
      timeout && clearTimeout(timeout);
      setMountedPopup(popupName);
    } else {
      timeout = setTimeout(() => {
        setMountedPopup(null);
      }, 3000);
    }
  }, [popupName]);

  useEffect(() => {
    return () => {
      timeout && clearTimeout(timeout);
    };
  }, []);

  const isOpened = useMemo(() => Boolean(popupName), [popupName]);

  switch (mountedPopup) {
    case "sign-in":
      return <SignIn isOpened={isOpened} />;
    case "sign-up":
      return <SignUp isOpened={isOpened} />;
    case "notifications":
      return <Notifications isOpened={isOpened} />;
    default:
      return null;
  }
};

export default GetParameterPopups;
