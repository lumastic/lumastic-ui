import React from "react";
import PropTypes from "prop-types";
import style from "./LoginForm.scss";
import classNames from "../../helpers/classNames";

const LoginForm = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.loginform)} data-testid={"loginform"} {...rest}>
    {children}
  </div>
);

LoginForm.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { LoginForm };
