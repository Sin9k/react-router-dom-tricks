import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

import usePrepareLink from "~/hooks/router/usePrepareLink";

const SignUpButton = () => {
  const signUpLink = usePrepareLink({
    isRelativePath: true,
    to: "/sign-up"
  });

  return (
    <Button variant="contained" component={Link} to={signUpLink}>
      Sign Up
    </Button>
  );
};

export default SignUpButton;
