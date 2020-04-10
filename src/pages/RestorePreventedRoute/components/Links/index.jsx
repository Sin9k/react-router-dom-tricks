import React from "react";
import { NavLink } from "react-router-dom";

import usePrepareLink from "~/hooks/router/usePrepareLink";

import useStyles from "./styles";

const Links = () => {
  const styles = useStyles();

  const homeLink = usePrepareLink({
    to: "/",
    isRelativePath: true
  });

  const galleryLink = usePrepareLink({
    to: "/gallery",
    isRelativePath: true
  });

  const booksLink = usePrepareLink({
    to: "/books",
    isRelativePath: true
  });

  const foodLink = usePrepareLink({
    to: "/food",
    isRelativePath: true
  });

  const loginLink = usePrepareLink({
    to: "/login",
    isRelativePath: true
  });

  return (
    <ul>
      <li>
        <NavLink
          exact
          to={homeLink}
          activeClassName={styles.active}
          className={styles.link}
        >
          Home Page
        </NavLink>
      </li>
      <li>
        <NavLink
          to={galleryLink}
          activeClassName={styles.active}
          className={styles.link}
        >
          Gallery for everyone
        </NavLink>
      </li>
      <li>
        <NavLink
          to={booksLink}
          activeClassName={styles.active}
          className={styles.link}
        >
          Books for authorized users
        </NavLink>
      </li>
      <li>
        <NavLink
          to={foodLink}
          activeClassName={styles.active}
          className={styles.link}
        >
          Food for authorized users
        </NavLink>
      </li>
      <li>
        <NavLink
          to={loginLink}
          activeClassName={styles.active}
          className={styles.link}
        >
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default Links;
