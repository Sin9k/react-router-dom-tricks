import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    position: "relative",
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    flexShrink: 0,
    margin: "0 auto",
  },
  close: {
    position: "absolute",
    top: 16,
    right: 16,
  },
}));
