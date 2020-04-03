import React from "react";
import PropTypes from "prop-types";
import style from "./Reactions.scss";
import classNames from "../../helpers/classNames";

const Reactions = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.reactions)} data-testid={"reactions"} {...rest}>
    {children}
  </div>
);

Reactions.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { Reactions };
