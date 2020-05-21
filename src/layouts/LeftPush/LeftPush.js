import React from "react";
import PropTypes from "prop-types";
import style from "./LeftPush.scss";
import classNames from "../../helpers/classNames";

const LeftPush = ({ children, className }) => (
  <div className={classNames(className, style.leftpush)}>{children}</div>
);

LeftPush.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { LeftPush };
