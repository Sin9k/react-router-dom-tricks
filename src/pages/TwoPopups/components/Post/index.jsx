/* global parseInt */
import React from "react";
import { useParams, useHistory, Link } from "react-router-dom";

import usePrepareLink from "~/hooks/router/usePrepareLink";
import { GET_PARAMS, GET_ENUMS } from "~/const/router";

import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import posts from "../../data/posts";
import PostCard from "./PostCard";
import useStyles from "./styles";

const Post = () => {
  const { id } = useParams();
  const history = useHistory();
  const styles = useStyles();

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

  const post = posts.find(post => post.id === parseInt(id));

  if (!post) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Button
        className={styles.back}
        variant="contained"
        color="secondary"
        onClick={history.goBack}
      >
        Go Back
      </Button>
      <PostCard post={post} />
      <div>
        <Button
          variant="contained"
          color="secondary"
          className={styles.button}
          startIcon={<DeleteIcon />}
          component={Link}
          to={signInLink}
        >
          Sign In
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={styles.button}
          endIcon={<SaveIcon />}
          component={Link}
          to={signUpLink}
        >
          Sign Up
        </Button>
        <Button
          variant="contained"
          color="default"
          className={styles.button}
          startIcon={<CloudUploadIcon />}
          component={Link}
          to={notificationsLink}
        >
          Notifications
        </Button>
      </div>
    </div>
  );
};

export default Post;
