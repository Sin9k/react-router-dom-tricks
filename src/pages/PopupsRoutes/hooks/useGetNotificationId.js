import { useLocation } from "react-router-dom";

export default () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return query.get("notification_id");
};
