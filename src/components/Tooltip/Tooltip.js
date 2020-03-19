import React from "react";
import PropTypes from "prop-types";
import style from "./Tooltip.scss";
import classNames from "../../helpers/classNames";

const Tooltip = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.tooltip)} data-testid={"tooltip"} {...rest}>
    {children}
  </div>
);

Tooltip.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { Tooltip };
