import PropTypes from "prop-types";
import React from "react";
import classNames from "../../helpers/classNames";
import style from "./Alert.scss";

const Alert = ({ children, className, type = "info" }) => (
  <div
    className={classNames(className, style.alert, style[type])}
    data-testid="alert"
    role="alert"
  >
    {children}
  </div>
);

Alert.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(["error", "warning", "success", "info"])
};

export { Alert };
