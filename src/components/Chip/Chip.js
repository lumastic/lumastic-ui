import React from "react";
import PropTypes from "prop-types";
import style from "./Chip.scss";
import classNames from "../../helpers/classNames";

const Chip = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.chip)} data-testid={"chip"} {...rest}>
    {children}
  </div>
);

Chip.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { Chip };
