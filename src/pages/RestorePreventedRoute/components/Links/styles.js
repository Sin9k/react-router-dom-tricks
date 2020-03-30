import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  link: {
    fontSize: 20
  },
  active: {
    pointerEvents: "none",
    textDecoration: "none",
    color: "black"
  }
}));
