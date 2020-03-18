import React from "react";
import PropTypes from "prop-types";
import style from "./COMPONENT_NAME.scss";
import classNames from "../../helpers/classNames";

const COMPONENT_NAME = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.COMPONENT_LOWER)} data-testid={"COMPONENT_LOWER"} {...rest}>
    {children}
  </div>
);

COMPONENT_NAME.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { COMPONENT_NAME };
