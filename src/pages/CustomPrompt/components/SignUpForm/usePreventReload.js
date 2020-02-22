import { useEffect, useCallback } from "react";

export default isEmpty => {
  const preventReload = useCallback(event => {
    event.preventDefault();
    event.returnValue = "";
  }, []);

  useEffect(() => {
    if (!isEmpty) {
      console.log("ADD");
      window.addEventListener("beforeunload", preventReload);
    }
    return () => {
      if (!isEmpty) {
        console.log("REMOVE");
        window.removeEventListener("beforeunload", preventReload);
      }
    };
  }, [isEmpty, preventReload]);
};
