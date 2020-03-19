import React from "react";
import PropTypes from "prop-types";
import style from "./Popover.scss";
import classNames from "../../helpers/classNames";

const Popover = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.popover)} data-testid={"popover"} {...rest}>
    {children}
  </div>
);

Popover.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { Popover };
