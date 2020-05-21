import PropTypes from "prop-types";
import React from "react";
import classNames from "../../helpers/classNames";
import style from "./AppBar.scss";

const AppBar = ({ children, className }) => (
  <header className={classNames(className, style.appbar)} data-testid="appbar">
    {children}
  </header>
);

AppBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { AppBar };
