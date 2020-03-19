import React from "react";
import PropTypes from "prop-types";
import style from "./AppBar.scss";
import classNames from "../../helpers/classNames";

const AppBar = ({ children, className }) => (
  <div className={classNames(className, style.appbar)} data-testid="appbar">
    {children}
  </div>
);

AppBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { AppBar };
