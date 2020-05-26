import React, { useState } from "react";
import { Route, Link, useHistory } from "react-router-dom";

import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

import usePrepareLink from "~/hooks/router/usePrepareLink";
import { GET_PARAMS, GET_ENUMS } from "~/const/router";

import OriginalImage from "./OriginalImage";
import useStyles from "./styles";

const SimilarPicturesPopup = ({ pictures }) => {
  const styles = useStyles();
  const history = useHistory();

  const [similarPictureLink] = useState(
    usePrepareLink({
      to: "/:id",
      isRelativePath: true,
    })
  );

  const signInLink = usePrepareLink({
    query: {
      [GET_PARAMS.popup]: GET_ENUMS.popup.signIn,
    },
  });

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Similar Pictures{" "}
          <Button
            variant="contained"
            color="secondary"
            className={styles.signIn}
            component={Link}
            to={signInLink}
          >
            Sign In
          </Button>
        </h2>
        <div className={styles.grid}>
          {pictures.map((picture) => {
            return (
              <Link
                key={picture.id}
                className={styles.link}
                to={similarPictureLink.pathname.replace(":id", picture.id)}
              >
                <img src={picture.url} width={220} height={150} alt="similar" />
              </Link>
            );
          })}
        </div>
      </div>
      <Route
        path={similarPictureLink.pathname}
        children={({ match }) => {
          return (
            <Dialog
              onClose={history.goBack}
              open={Boolean(match)}
              maxWidth="lg"
            >
              <OriginalImage pictures={pictures} />
            </Dialog>
          );
        }}
      />
    </>
  );
};

export default SimilarPicturesPopup;
