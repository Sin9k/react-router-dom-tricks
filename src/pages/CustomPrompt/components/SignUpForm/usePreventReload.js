import { useEffect, useCallback } from "react";

export default isEmpty => {
  const preventReload = useCallback(event => {
    event.preventDefault();
    event.returnValue = "";
  }, []);

  useEffect(() => {
    if (!isEmpty) {
      window.addEventListener("beforeunload", preventReload);
    }
    return () => {
      if (!isEmpty) {
        window.removeEventListener("beforeunload", preventReload);
      }
    };
  }, [isEmpty, preventReload]);
};
