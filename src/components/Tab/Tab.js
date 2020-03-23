import React from "react";
import PropTypes from "prop-types";
import style from "./Tab.scss";
import classNames from "../../helpers/classNames";

const Tab = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.tab)} data-testid={"tab"} {...rest}>
    {children}
  </div>
);

Tab.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { Tab };
