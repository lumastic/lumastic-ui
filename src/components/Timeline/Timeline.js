import React from "react";
import PropTypes from "prop-types";
import style from "./Timeline.scss";
import classNames from "../../helpers/classNames";

const Timeline = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.timeline)} data-testid={"timeline"} {...rest}>
    {children}
  </div>
);

Timeline.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { Timeline };
