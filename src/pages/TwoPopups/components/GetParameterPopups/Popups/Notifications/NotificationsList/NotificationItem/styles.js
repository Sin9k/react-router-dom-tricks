import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  inline: {
    display: "inline",
  },
  item: {
    "&:hover": {
      backgroundColor: "#f0f0f0",
    },
  },
  avatar: {
    width: 50,
    height: 50,
    marginTop: 6,
    marginRight: 12,
  },
}));
