import React from "react";
import PropTypes from "prop-types";
import style from "./Button.scss";
import classNames from "../../helpers/classNames";

const Button = ({
  children,
  width,
  variant = "contained",
  color,
  icon,
  size,
  onClick,
  disabled,
  type = "button",
  ...rest
}) => (
  <button
    className={classNames(
      style.button,
      style[size],
      style[variant],
      style[width]
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
  children: PropTypes.element,
  type: PropTypes.oneOf(["submit", "reset", "button"])
};

export { Button };
