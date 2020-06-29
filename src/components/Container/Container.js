import React from "react";
import PropTypes from "prop-types";
import style from "./Container.scss";
import classNames from "../../helpers/classNames";

const Container = ({ children, className, maxWidth }) => (
  <div
    className={classNames(className, style.container)}
    data-testid="container"
    style={{ maxWidth }}
  >
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node,
  maxWidth: PropTypes.string,
  className: PropTypes.string
};

export { Container };
