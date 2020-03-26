import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import style from "./IconButton.scss";
import classNames from "../../helpers/classNames";
import { Button } from "../Button";

const IconButton = forwardRef(
  ({ children, className, size, setSize, ...rest }, ref) => (
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
        className={style.icon}
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
  setSize: PropTypes.string
};

export { IconButton };
