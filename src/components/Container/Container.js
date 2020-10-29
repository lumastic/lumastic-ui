import React from "react";
import PropTypes from "prop-types";
import style from "./Container.scss";
import classNames from "../../helpers/classNames";

const Container = ({ children, className, maxWidth, ...rest }) => (
  <div
    className={classNames(className, style.container)}
    data-testid="container"
    style={{ maxWidth }}
    {...rest}
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
