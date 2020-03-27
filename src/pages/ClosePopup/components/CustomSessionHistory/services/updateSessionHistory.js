import setCustomHistory from "./setCustomHistory";
import getCustomHistory from "./getCustomHistory";

export default (location, type) => {
  const customHistory = getCustomHistory();

  switch (type) {
    case "REPLACE": {
      customHistory.pop();
      customHistory.push(location);
      break;
    }
    case "PUSH": {
      customHistory.push(location);
      break;
    }
    case "POP": {
      customHistory.pop();
      break;
    }
    default: {
    }
  }

  setCustomHistory(customHistory);
};
