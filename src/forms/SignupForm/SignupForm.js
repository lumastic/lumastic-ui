import React from "react";
import PropTypes from "prop-types";
import style from "./SignupForm.scss";
import classNames from "../../helpers/classNames";

const SignupForm = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.signupform)} data-testid={"signupform"} {...rest}>
    {children}
  </div>
);

SignupForm.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { SignupForm };
