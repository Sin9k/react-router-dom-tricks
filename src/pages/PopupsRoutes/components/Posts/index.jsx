import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import usePrepareLink from "~/hooks/router/usePrepareLink";
import { GET_PARAMS, GET_ENUMS } from "~/const/router";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import posts from "../../data/posts";
import useStyles from "./styles";

const Posts = () => {
  const styles = useStyles();
  const { url } = useRouteMatch();

  const signInLink = usePrepareLink({
    query: {
      [GET_PARAMS.popup]: GET_ENUMS.popup.signIn
    }
  });
  const signUpLink = usePrepareLink({
    query: {
      [GET_PARAMS.popup]: GET_ENUMS.popup.signUp
    }
  });
  const notificationsLink = usePrepareLink({
    query: {
      [GET_PARAMS.popup]: GET_ENUMS.popup.notifications
    }
  });

  return (
    <div className={styles.container}>
      <div>
        <Button
          variant="contained"
          className={styles.button}
          component={Link}
          to={signInLink}
        >
          Sign In
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={styles.button}
          component={Link}
          to={signUpLink}
        >
          Sign Up
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={styles.button}
          component={Link}
          to={notificationsLink}
        >
          Notifications
        </Button>
      </div>
      <div className={styles.posts}>
        {posts.map(post => {
          return (
            <Card
              className={styles.card}
              key={post.id}
              component={Link}
              to={`${url}/${post.id}`}
            >
              <CardActionArea>
                <CardMedia
                  className={styles.media}
                  image={post.image}
                  title={post.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {post.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </div>
      <div>
        <Button
          variant="outlined"
          className={styles.button}
          component={Link}
          to={signInLink}
        >
          Sign In
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className={styles.button}
          component={Link}
          to={signUpLink}
        >
          Sign Up
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          className={styles.button}
          component={Link}
          to={notificationsLink}
        >
          Notifications
        </Button>
      </div>
    </div>
  );
};

export default Posts;
