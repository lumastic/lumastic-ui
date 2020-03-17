import React from "react";
import PropTypes from "prop-types";
import style from "./IconButton.scss";
import classNames from "../../helpers/classNames";

const IconButton = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.iconbutton)} {...rest}>
    {children}
  </div>
);

IconButton.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string
};

export { IconButton };
