import React from "react";
import PropTypes from "prop-types";
import style from "./AppLayout.scss";
import classNames from "../../helpers/classNames";

const AppLayout = ({ children, className }) => (
  <div
    className={classNames(className, style.applayout)}
    data-testid="applayout"
  >
    {children}
  </div>
);

AppLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { AppLayout };
