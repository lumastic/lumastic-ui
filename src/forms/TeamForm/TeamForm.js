import React from "react";
import PropTypes from "prop-types";
import style from "./TeamForm.scss";
import classNames from "../../helpers/classNames";

const TeamForm = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.teamform)} data-testid={"teamform"} {...rest}>
    {children}
  </div>
);

TeamForm.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { TeamForm };
