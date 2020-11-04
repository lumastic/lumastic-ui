import React from "react";
import PropTypes from "prop-types";
import style from "./FormSaver.scss";
import classNames from "../../helpers/classNames";

const FormSaver = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.formsaver)} data-testid={"formsaver"} {...rest}>
    {children}
  </div>
);

FormSaver.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { FormSaver };
