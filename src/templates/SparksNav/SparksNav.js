import React from "react";
import PropTypes from "prop-types";
import style from "./SparksNav.scss";
import classNames from "../../helpers/classNames";

const SparksNav = ({ children, className, ...rest }) => (
  <div
    className={classNames(className, style.sparksnav)}
    data-testid="sparksnav"
    {...rest}
  >
    Childrem
  </div>
);

SparksNav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { SparksNav };
