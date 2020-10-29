import React from "react";
import PropTypes from "prop-types";
import style from "./TabNav.scss";
import classNames from "../../helpers/classNames";

const TabNav = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.tabnav)} data-testid={"tabnav"} {...rest}>
    {children}
  </div>
);

TabNav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { TabNav };
