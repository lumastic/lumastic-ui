import React from "react";
import PropTypes from "prop-types";
import { Dot } from "../../icons/Dot";
import style from "./Point.scss";
import classNames from "../../helpers/classNames";

const Point = ({
  className,
  color = "primary",
  size = "normal",
  setSize,
  withBorder
}) => (
  <div
    style={{ fontSize: setSize }}
    className={classNames(className, style.point, style[color], style[size], {
      [style.border]: withBorder
    })}
  >
    <Dot />
  </div>
);

Point.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(["primary", "light", "red", "green", "grey"]),
  size: PropTypes.oneOf(["normal", "small"]),
  withBorder: PropTypes.bool,
  setSize: PropTypes.string
};

export { Point };
