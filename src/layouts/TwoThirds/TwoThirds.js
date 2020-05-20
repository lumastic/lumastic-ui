import React from "react";
import PropTypes from "prop-types";
import style from "./TwoThirds.scss";
import classNames from "../../helpers/classNames";

const TwoThirds = ({ children, className }) => (
  <div className={classNames(className, style.twothirds)}>{children}</div>
);

TwoThirds.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { TwoThirds };
