import React from "react";
import PropTypes from "prop-types";
import style from "./Breadcrumbs.scss";
import classNames from "../../helpers/classNames";

const Breadcrumbs = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.breadcrumbs)} data-testid={"breadcrumbs"} {...rest}>
    {children}
  </div>
);

Breadcrumbs.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { Breadcrumbs };
