import React from "react";
import { Route, Link, useHistory } from "react-router-dom";

import usePrepareLink from "~/hooks/router/usePrepareLink";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Dialog from "@material-ui/core/Dialog";

import useStyles from "./styles";
import LikesPopup from "./LikesPopup";
import ViewersPopup from "./ViewersPopup";
import SimilarPicturesPopup from "./SimilarPicturesPopup";

const PostCard = ({ post }) => {
  const styles = useStyles();
  const history = useHistory();

  const likesLink = usePrepareLink({
    to: "/likes",
    isRelativePath: true,
  });

  const viewersLink = usePrepareLink({
    to: "/viewers",
    isRelativePath: true,
  });

  const similarPicturesLink = usePrepareLink({
    to: "/similar-pictures",
    isRelativePath: true,
  });

  return (
    <>
      <Card className={styles.card}>
        <CardMedia
          className={styles.media}
          image={post.image}
          title={post.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" component={Link} to={likesLink}>
            Likes
          </Button>
          <Button
            size="small"
            color="primary"
            component={Link}
            to={viewersLink}
          >
            Viewers
          </Button>
          <Button
            size="small"
            color="primary"
            component={Link}
            to={similarPicturesLink}
          >
            Similar Pictures
          </Button>
        </CardActions>
      </Card>
      <Route
        path={likesLink.pathname}
        children={({ match }) => {
          return (
            <Dialog onClose={history.goBack} open={Boolean(match)}>
              <LikesPopup likes={post.likes} />
            </Dialog>
          );
        }}
      />
      <Route
        path={viewersLink.pathname}
        children={({ match }) => {
          return (
            <Dialog onClose={history.goBack} open={Boolean(match)}>
              <ViewersPopup viewers={post.viewers} />
            </Dialog>
          );
        }}
      />
      <Route
        path={similarPicturesLink.pathname}
        children={({ match }) => {
          return (
            <Dialog onClose={history.goBack} open={Boolean(match)}>
              <SimilarPicturesPopup pictures={post.pictures} />
            </Dialog>
          );
        }}
      />
    </>
  );
};

export default PostCard;
