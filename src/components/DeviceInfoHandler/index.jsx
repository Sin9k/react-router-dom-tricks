/* global window */
import React, { useState, useCallback, useEffect } from "react";

import DeviceInfoContext from "~/contexts/DeviceInfoContext";
import calculateDeviceInfo from "~/services/calculateDeviceInfo";

const DeviceInfoHandler = ({ children }) => {
  const [deviceInfo, setDeviceInfo] = useState(
    calculateDeviceInfo(window.innerWidth)
  );

  const onResize = useCallback(() => {
    const newDeviceInfo = calculateDeviceInfo(window.innerWidth);

    if (deviceInfo.device !== newDeviceInfo.device) {
      setDeviceInfo(newDeviceInfo);
    }
  }, [deviceInfo]);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [deviceInfo, onResize]);

  return (
    <DeviceInfoContext.Provider value={deviceInfo}>
      {children}
    </DeviceInfoContext.Provider>
  );
};

export default DeviceInfoHandler;
