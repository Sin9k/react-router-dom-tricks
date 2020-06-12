import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "16px 0",
    minWidth: 400,
    overflow: "hidden",
  },
  title: {
    marginTop: 0,
    padding: "0 16px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  grid: {
    flex: 1,
    display: "grid",
    "grid-template-columns": "220px 220px",
    "grid-gap": 10,
    overflow: "auto",
    padding: "0 16px",
    "&::-webkit-scrollbar-track": {
      "background-color": "#F5F5F5",
    },
    "&::-webkit-scrollbar": {
      width: 4,
      "border-radius": 10,
      "background-color": "#F5F5F5",
    },
    "&::-webkit-scrollbar-thumb": {
      "background-color": "#BCBCBC",
    },
  },
  button: {
    border: "none",
    padding: 0,
    cursor: "pointer",
  },
}));
