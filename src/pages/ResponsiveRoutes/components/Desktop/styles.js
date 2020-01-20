import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  container: {
    maxWidth: 1024,
    display: "flex",
    padding: 16,
    margin: "0 auto"
  },
  sidebar: {
    flex: "1 0 25%"
  },
  list: {
    paddingLeft: 16,
    flex: "3 0 75%"
  }
}));
