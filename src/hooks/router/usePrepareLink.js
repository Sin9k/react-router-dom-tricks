import { useLocation, useRouteMatch } from "react-router-dom";

export default ({
  to,
  isRelativePath = false,
  query = {},
  pushToQuery = {},
  hash,
  keepOldQuery = false,
  state = {},
}) => {
  const location = useLocation();
  const match = useRouteMatch();

  let pathname;

  if (match && isRelativePath) {
    pathname = match.url + to;
  } else {
    pathname = to || location.pathname;
  }

  const newQuery = keepOldQuery
    ? new URLSearchParams(location.search)
    : new URLSearchParams();

  Object.entries(query).forEach(([key, value]) => {
    newQuery.set(key, value);
  });

  Object.entries(pushToQuery).forEach(([key, value]) => {
    const currentValue = newQuery.get(key);
    const splittedValue = currentValue ? currentValue.split(",") : [];
    splittedValue.push(value);

    newQuery.set(key, splittedValue);
  });

  return {
    pathname: pathname.replace(/\/\//g, "/"),
    search: newQuery.toString() ? `?${newQuery.toString()}` : "",
    hash,
    state,
  };
};
