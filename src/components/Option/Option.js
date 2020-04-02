import PropTypes from "prop-types";
import React, { useContext, useEffect } from "react";
import SelectContext from "../Select/helpers/SelectContext";

const Option = ({ children, name }) => {
  const { setOptions } = useContext(SelectContext);

  useEffect(() => {
    if (setOptions) setOptions(state => ({ ...state, [name]: children }));
  }, [setOptions, name, children]);

  return (
    <div hidden data-testid="option">
      {children}
    </div>
  );
};

Option.propTypes = {
  children: PropTypes.node,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export { Option };
