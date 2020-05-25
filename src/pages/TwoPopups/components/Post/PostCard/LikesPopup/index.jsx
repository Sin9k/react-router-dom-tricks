import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";

const LikesPopup = ({ likes }) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <h1>Likes</h1>
      {likes.map(like => {
        return (
          <Paper className={styles.paper} key={like.id}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar className={styles.avatar}>
                  {like.title.charAt(0)}
                </Avatar>
              </Grid>
              <Grid item xs zeroMinWidth className={styles.title}>
                <Typography noWrap>{like.title}</Typography>
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </div>
  );
};

export default LikesPopup;
