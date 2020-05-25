import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    padding: 16,
    minWidth: 400,
  },
  title: {
    marginTop: 0,
  },
  grid: {
    display: "grid",
    "grid-template-columns": "220px 220px",
    "grid-gap": 10,
  },

  button: {
    border: "none",
    padding: 0,
    cursor: "pointer",
  },
}));
