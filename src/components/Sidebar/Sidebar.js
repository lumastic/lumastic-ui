import React from "react";
import PropTypes from "prop-types";
import style from "./Sidebar.scss";
import classNames from "../../helpers/classNames";

const Sidebar = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.sidebar)} data-testid={"sidebar"} {...rest}>
    {children}
  </div>
);

Sidebar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { Sidebar };
