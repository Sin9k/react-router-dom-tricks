import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  container: {
    color: "#444",
    backgroundColor: "#f6f6f6",
    cursor: "pointer",
    padding: "16px 0",
    marginBottom: 10,

    "&:hover": {
      boxShadow: "0 3px 6px 0 rgba(0,0,0,.35)"
    }
  },
  list: {
    margin: 0
  }
}));
