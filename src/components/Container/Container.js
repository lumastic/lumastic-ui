import React from "react";
import PropTypes from "prop-types";
import style from "./Container.scss";
import classNames from "../../helpers/classNames";

const Container = ({ children, className }) => (
  <div
    className={classNames(className, style.container)}
    data-testid="container"
  >
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { Container };