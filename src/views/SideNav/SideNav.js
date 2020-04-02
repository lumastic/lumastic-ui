import React from "react";
import PropTypes from "prop-types";
import style from "./SideNav.scss";
import classNames from "../../helpers/classNames";

const SideNav = ({ children, className }) => (
  <nav className={classNames(className, style.sidenav)} data-testid="sidenav">
    {children}
  </nav>
);

SideNav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { SideNav };
