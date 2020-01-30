import React from "react";
import { Route, Link, useRouteMatch, withRouter } from "react-router-dom";

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

const PostCard = ({ post, history }) => {
  const { url } = useRouteMatch();
  const styles = useStyles();

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
          <Button
            size="small"
            color="primary"
            component={Link}
            to={`${url}/likes`}
          >
            Likes
          </Button>
          <Button
            size="small"
            color="primary"
            component={Link}
            to={`${url}/viewers`}
          >
            Viewers
          </Button>
        </CardActions>
      </Card>
      <Route
        path={`${url}/likes`}
        children={({ match }) => {
          return (
            <Dialog onClose={history.goBack} open={Boolean(match)}>
              <LikesPopup likes={post.likes} />
            </Dialog>
          );
        }}
      />
      <Route
        path={`${url}/viewers`}
        children={({ match }) => {
          return (
            <Dialog onClose={history.goBack} open={Boolean(match)}>
              <ViewersPopup viewers={post.viewers} />
            </Dialog>
          );
        }}
      />
    </>
  );
};

export default withRouter(PostCard);
