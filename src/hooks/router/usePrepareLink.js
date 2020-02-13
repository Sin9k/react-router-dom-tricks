import { useLocation } from "react-router-dom";

export default ({
  to,
  isRelativePath = false,
  query = {},
  keepOldQuery = false
}) => {
  const location = useLocation();

  let pathname;

  if (isRelativePath) {
    pathname = location.pathname + to;
  } else {
    pathname = to || location.pathname;
  }

  const newQuery = keepOldQuery
    ? new URLSearchParams(location.search)
    : new URLSearchParams();

  Object.entries(query).forEach(([key, value]) => {
    newQuery.set(key, value);
  });

  return newQuery.toString() ? `${pathname}?${newQuery.toString()}` : pathname;
};
