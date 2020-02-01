import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  list: {
    width: 250
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: "#ffffff",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }
}));
