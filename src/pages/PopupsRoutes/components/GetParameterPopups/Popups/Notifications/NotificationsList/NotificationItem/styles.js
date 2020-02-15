import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  inline: {
    display: "inline"
  },
  item: {
    "&:hover": {
      backgroundColor: "#f0f0f0"
    }
  }
}));
