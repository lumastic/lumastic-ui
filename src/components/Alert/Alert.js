import PropTypes from "prop-types";
import React from "react";
import classNames from "../../helpers/classNames";
import style from "./Alert.scss";

const Alert = ({
  children,
  className,
  severity = "info",
  variant = "normal"
}) => (
  <div
    className={classNames(
      className,
      style.alert,
      style[severity],
      style[variant]
    )}
    data-testid="alert"
    role="alert"
  >
    {children}
  </div>
);

Alert.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  severity: PropTypes.oneOf(["error", "warning", "success", "info"]),
  variant: PropTypes.oneOf(["filled", "outlined", "normal"])
};

export { Alert };
