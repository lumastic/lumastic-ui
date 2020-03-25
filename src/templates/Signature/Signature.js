import React from "react";
import PropTypes from "prop-types";
import style from "./Signature.scss";
import classNames from "../../helpers/classNames";

const Signature = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.signature)} data-testid={"signature"} {...rest}>
    {children}
  </div>
);

Signature.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { Signature };
