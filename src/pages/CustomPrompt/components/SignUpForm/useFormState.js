import { useState, useCallback } from "react";

export default () => {
  const [fields, setFields] = useState({});

  const onChange = useCallback(
    event => {
      const filteredFields = Object.entries({
        ...fields,
        [event.target.name]: event.target.value
      }).reduce((memo, [key, value]) => {
        if (value) {
          memo[key] = value;
        }

        return memo;
      }, {});

      setFields(filteredFields);
    },
    [fields]
  );

  const onSubmit = useCallback(event => {
    event.preventDefault();
  }, []);

  return {
    fields,
    onChange,
    onSubmit
  };
};
