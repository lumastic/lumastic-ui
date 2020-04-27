import React from "react";
import PropTypes from "prop-types";
import style from "./OrgForm.scss";
import classNames from "../../helpers/classNames";

const OrgForm = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.orgform)} data-testid={"orgform"} {...rest}>
    {children}
  </div>
);

OrgForm.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { OrgForm };
