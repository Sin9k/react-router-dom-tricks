import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

import YouTube from "~/assets/icons/youtube.svg";
import GitHub from "~/assets/icons/github.svg";
import { TRICKS_ROUTES } from "~/const/tricks";

import useStyles from "./styles";
import { IconButton } from "@material-ui/core";

const HomePage = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <h2>React Router Tricks</h2>
      {TRICKS_ROUTES.map((trick) => {
        return (
          <div key={trick.url} className={styles.card}>
            <Link to={trick.url} className={styles.cardLink} />
            <img className={styles.image} src={trick.image} alt="" />
            <div className={styles.info}>
              <h3 className={styles.title}>{trick.title}</h3>
              <p className={styles.description}>{trick.description}</p>
              <p className={styles.social}>
                {Boolean(trick.enYouTube) && (
                  <Button
                    variant="outlined"
                    color="secondary"
                    endIcon={<YouTube width="26px" />}
                    component="a"
                    href={trick.enYouTube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    EN
                  </Button>
                )}
                {Boolean(trick.ruYouTube) && (
                  <Button
                    variant="outlined"
                    color="secondary"
                    endIcon={<YouTube width="26px" />}
                    component="a"
                    href={trick.ruYouTube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    RU
                  </Button>
                )}

                {Boolean(trick.github) && (
                  <IconButton
                    component="a"
                    href={trick.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    <GitHub width="26px" />
                  </IconButton>
                )}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
