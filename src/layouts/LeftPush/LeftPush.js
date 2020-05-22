import React from "react";
import PropTypes from "prop-types";
import style from "./LeftPush.scss";
import classNames from "../../helpers/classNames";

const LeftPush = ({ children, className, hideRightOnTablet = false }) => (
  <div
    className={classNames(className, style.leftpush, {
      [style["hide-right"]]: hideRightOnTablet
    })}
  >
    {children}
  </div>
);

LeftPush.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hideRightOnTablet: PropTypes.bool
};

export { LeftPush };
