import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  container: {
    padding: 16,
    minWidth: 400
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2)
  },
  title: {
    display: "flex",
    alignItems: "center"
  }
}));
