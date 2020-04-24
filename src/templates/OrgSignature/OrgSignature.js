import React from "react";
import PropTypes from "prop-types";
import style from "./OrgSignature.scss";
import classNames from "../../helpers/classNames";

const OrgSignature = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.orgsignature)} data-testid={"orgsignature"} {...rest}>
    {children}
  </div>
);

OrgSignature.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { OrgSignature };
