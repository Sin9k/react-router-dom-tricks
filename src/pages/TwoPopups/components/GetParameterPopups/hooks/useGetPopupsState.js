/* global clearTimeout */
import { useState, useEffect, useMemo } from "react";

import { GET_PARAMS } from "~/const/router";
import useGetParameter from "~/hooks/router/useGetParameter";

let timeout;

function parseStringifiedValue(value) {
  return value ? value.split(",") : [];
}

export default () => {
  const rawPopups = useGetParameter(GET_PARAMS.popup);
  const [mountedPopups, setMountedPopups] = useState(
    parseStringifiedValue(rawPopups)
  );

  useEffect(() => {
    if (rawPopups) {
      timeout && clearTimeout(timeout);
      setMountedPopups(rawPopups.split(","));
    } else {
      timeout = setTimeout(() => {
        setMountedPopups([]);
      }, 300);
    }
  }, [rawPopups]);

  useEffect(() => {
    return () => {
      timeout && clearTimeout(timeout);
    };
  }, []);

  const popups = useMemo(() => parseStringifiedValue(rawPopups), [rawPopups]);

  return {
    mountedPopups,
    popups,
  };
};
