import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  container: {
    padding: 16,
    display: "flex",
    flexDirection: "column",
    minWidth: 400
  },
  mobileContainer: {
    minWidth: 240
  },
  field: {
    marginBottom: 20
  }
}));
