import React from "react";
import PropTypes from "prop-types";
import style from "./Select.scss";
import classNames from "../../helpers/classNames";

const Select = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.select)} data-testid={"select"} {...rest}>
    {children}
  </div>
);

Select.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { Select };
