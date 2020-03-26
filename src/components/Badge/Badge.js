import React from "react";
import PropTypes from "prop-types";
import style from "./Badge.scss";
import classNames from "../../helpers/classNames";

const Badge = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.badge)} data-testid={"badge"} {...rest}>
    {children}
  </div>
);

Badge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { Badge };
