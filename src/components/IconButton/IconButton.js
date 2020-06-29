import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { Button } from "../Button";
import style from "./IconButton.scss";
import classNames from "../../helpers/classNames";

const IconButton = forwardRef(
  ({ children, className, buttonClass, size, setSize, ...rest }, ref) => (
    <div
      className={classNames(
        className,
        style["icon-button-container"],
        style[size]
      )}
      style={{ width: setSize, height: setSize }}
    >
      <Button
        size={size}
        {...rest}
        className={classNames(buttonClass, style.icon)}
        style={{ fontSize: setSize }}
        ref={ref}
      >
        <div className={style["button-icon"]}>{children}</div>
      </Button>
    </div>
  )
);

IconButton.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(["big", "small"]),
  className: PropTypes.string,
  buttonClass: PropTypes.string,
  setSize: PropTypes.string
};

export { IconButton };
