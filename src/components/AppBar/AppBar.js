import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import style from "./AppBar.scss";
import classNames from "../../helpers/classNames";

const AppBar = forwardRef(({ children, className }, ref) => (
  <header
    className={classNames(className, style.appbar)}
    data-testid="appbar"
    ref={ref}
  >
    {children}
  </header>
));

AppBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { AppBar };
