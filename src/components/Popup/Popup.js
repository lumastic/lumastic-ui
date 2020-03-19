import React from "react";
import PropTypes from "prop-types";
import style from "./Popup.scss";
import classNames from "../../helpers/classNames";

const Popup = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.popup)} data-testid={"popup"} {...rest}>
    {children}
  </div>
);

Popup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { Popup };
