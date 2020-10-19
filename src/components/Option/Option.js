import PropTypes from "prop-types";
import React, { useContext, useEffect } from "react";
import SelectContext from "../Select/helpers/SelectContext";

const Option = ({ children, name }) => {
  const { setOptions } = useContext(SelectContext);

  useEffect(() => {
    if (setOptions) setOptions(state => ({ ...state, [name]: children }));

    return () =>
      setOptions(state => {
        delete state[name];
        return { ...state };
      });
  }, [setOptions, name, children]);

  return <></>;
};

Option.propTypes = {
  children: PropTypes.node,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export { Option };
