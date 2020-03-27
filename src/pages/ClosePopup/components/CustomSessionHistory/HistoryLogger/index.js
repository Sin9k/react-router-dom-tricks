import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import updateSessionHistory from "../services/updateSessionHistory";
import clearCustomHistory from "../services/clearCustomHistory";

const HistoryLogger = () => {
  const history = useHistory();

  useEffect(() => {
    const unlistenHistory = history.listen(updateSessionHistory);

    return () => {
      unlistenHistory();
      clearCustomHistory();
    };
  }, [history]);

  return null;
};

export default HistoryLogger;
