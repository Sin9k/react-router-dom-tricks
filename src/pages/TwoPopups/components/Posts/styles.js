import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  container: {
    padding: 16,
  },
  button: {
    marginRight: 16,
  },
  posts: {
    margin: "16px 0 16px 0",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card: {
    maxWidth: 345,
    margin: "0 16px 16px 0",
    textDecoration: "none",
  },
  media: {
    height: 200,
  },
}));
