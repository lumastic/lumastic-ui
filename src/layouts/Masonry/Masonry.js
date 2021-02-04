import React from "react";
import PropTypes from "prop-types";
import style from "./Masonry.scss";
import classNames from "../../helpers/classNames";

const Masonry = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.masonry)} data-testid={"masonry"} {...rest}>
    {children}
  </div>
);

Masonry.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { Masonry };
