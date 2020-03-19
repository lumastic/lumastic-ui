import React from "react";
import PropTypes from "prop-types";
import style from "./Main.scss";
import classNames from "../../helpers/classNames";

const Main = ({ children, className }) => (
  <div className={classNames(className, style.main)} data-testid="main">
    {children}
  </div>
);

Main.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { Main };
