import PropTypes from "prop-types";
import React from "react";
import classNames from "../../helpers/classNames";
import style from "./Alert.scss";

/**
 * A component that shows formatted messages
 * @param {Object} props
 * @param {*} props.children Children of the component
 * @param {string} props.className Custom class you can add to the component
 * @param {{severity:("error", "warning", "success", "info)}} props.severity
 * * @param {("filled", "outlined", "normal")} props.variant The styling of the alert - defaults to "normal"
 */
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
  /**
   * Alert text.
   */
  children: PropTypes.node,
  className: PropTypes.string,
  /**
   * Alert severity
   */
  severity: PropTypes.oneOf(["error", "warning", "success", "info"]),
  variant: PropTypes.oneOf(["filled", "outlined", "normal"])
};

export { Alert };
