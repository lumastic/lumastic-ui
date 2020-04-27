import React from "react";
import PropTypes from "prop-types";
import style from "./SparkForm.scss";
import classNames from "../../helpers/classNames";

const SparkForm = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.sparkform)} data-testid={"sparkform"} {...rest}>
    {children}
  </div>
);

SparkForm.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { SparkForm };
