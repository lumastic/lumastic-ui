import React from "react";
import PropTypes from "prop-types";
import style from "./IconButton.scss";
import classNames from "../../helpers/classNames";
import { Button } from "../Button";

const IconButton = ({ children, className, size, ...rest }) => (
  <div
    className={classNames(
      className,
      style["icon-button-container"],
      style[size]
    )}
  >
    <Button size={size} {...rest} className={style.icon}>
      <div className={style["button-icon"]}>{children}</div>
    </Button>
  </div>
);

IconButton.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(["big", "small"]),
  className: PropTypes.string
};

export { IconButton };
