import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  container: {
    display: "grid",
    gridTemplateColumns: "350px 200px",
    alignItems: "center",
    padding: 20
  },
  dialog: {
    width: 400,
    height: 600,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24
  }
}));
