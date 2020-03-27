import getCustomHistory from "./getCustomHistory";

export default () => {
  const customHistory = getCustomHistory();

  return customHistory.length > 0;
};
