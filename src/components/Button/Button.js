import React from "react";
import PropTypes from "prop-types";
import style from "./Button.scss";
import classNames from "../../helpers/classNames";

const Button = ({
  children,
  className,
  type = "button",
  variant = "default",
  color = "primary",
  fullWidth,
  size,
  disabled,
  onClick,
  ...rest
}) => (
  <button
    className={classNames(
      className,
      style.button,
      style[color],
      style[variant],
      { [style[size]]: size },
      { [style["full-width"]]: fullWidth },
      { [style.disabled]: disabled }
    )}
    onClick={onClick}
    disabled={disabled}
    type={type || "button"}
    {...rest}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(["submit", "reset", "button"]),
  variant: PropTypes.oneOf(["default", "contained", "outlined"]),
  color: PropTypes.oneOf(["primary", "secondary", "red", "green", "yellow"]),
  fullWidth: PropTypes.bool,
  size: PropTypes.oneOf(["big", "small"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

export { Button };
