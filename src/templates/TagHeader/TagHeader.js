import React from "react";
import PropTypes from "prop-types";
import style from "./TagHeader.scss";
import classNames from "../../helpers/classNames";

const TagHeader = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.tagheader)} data-testid={"tagheader"} {...rest}>
    {children}
  </div>
);

TagHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { TagHeader };
