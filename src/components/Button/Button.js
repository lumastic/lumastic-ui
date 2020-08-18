import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import style from "./Button.scss";
import classNames from "../../helpers/classNames";
import { useInputContext } from "../../helpers/useInputContext";

const Button = forwardRef(
  (
    {
      children,
      className,
      type = "button",
      variant = "default",
      shadow = false,
      color = "primary",
      fullWidth,
      size,
      disabled,
      onClick,
      ...rest
    },
    ref
  ) => {
    const { formState } = useInputContext();
    return (
      <button
        className={classNames(
          className,
          style.button,
          style[color],
          style[variant],
          { [style[size]]: size },
          { [style["full-width"]]: fullWidth },
          { [style.disabled]: disabled },
          { [style.shadow]: shadow }
        )}
        onClick={onClick}
        disabled={disabled || formState.isSubmitting}
        type={type || "button"}
        data-testid="button"
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(["submit", "reset", "button"]),
  variant: PropTypes.oneOf(["default", "contained", "outlined"]),
  shadow: PropTypes.bool,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "red",
    "green",
    "yellow",
    "accent",
    "grey",
    "light"
  ]),
  fullWidth: PropTypes.bool,
  size: PropTypes.oneOf(["big", "small"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

export { Button };
