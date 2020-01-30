import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import posts from "../../data/posts";
import useStyles from "./styles";

const ResponsiveRoutesPage = () => {
  const { url } = useRouteMatch();
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div>
        <Button variant="contained" className={styles.button}>
          Sign In
        </Button>
        <Button variant="contained" color="primary" className={styles.button}>
          Sign Up
        </Button>
        <Button variant="contained" color="secondary" className={styles.button}>
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
        <Button variant="outlined" className={styles.button}>
          Sign In
        </Button>
        <Button variant="outlined" color="primary" className={styles.button}>
          Sign Up
        </Button>
        <Button variant="outlined" color="secondary" className={styles.button}>
          Notifications
        </Button>
      </div>
    </div>
  );
};

export default ResponsiveRoutesPage;
