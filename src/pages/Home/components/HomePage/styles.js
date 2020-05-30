import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  container: {
    padding: "16px",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 16,
    textDecoration: "none",
    maxWidth: 850,
    position: "relative",
    "&:hover": {
      backgroundColor: "#E8E8E8",
    },
    "@media (max-width: 750px)": {
      maxWidth: 450,
      flexDirection: "column",
      margin: "0 auto 30px",
    },
  },
  cardLink: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  info: {
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    padding: "6px 0",
  },
  image: {
    flexShrink: 0,
    width: 300,
    marginRight: 16,
    "@media (max-width: 750px)": {
      width: "100%",
    },
  },
  title: {
    color: "#030303",
    fontSize: 22,
    marginTop: 0,
    marginBottom: 6,
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  description: {
    margin: 0,
    color: "#606060",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 4,
    "-webkit-box-orient": "vertical",
    "@media (max-width: 750px)": {
      "-webkit-line-clamp": 6,
    },
  },
  social: {
    marginTop: "auto",
    marginBottom: 0,
    paddingTop: 12,
  },
  link: {
    textDecoration: "none",
    marginRight: 12,
  },
}));
