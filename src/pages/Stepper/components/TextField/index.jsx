import React from "react";

import MaterialTextField from "@material-ui/core/TextField";

const TextField = ({ input, meta, className, label, variant }) => {
  return (
    <MaterialTextField
      {...input}
      className={className}
      label={label}
      variant={variant}
    />
  );
};

export default TextField;
