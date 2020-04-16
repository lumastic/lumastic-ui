import React from "react";
import PropTypes from "prop-types";
import style from "./Reaction.scss";
import classNames from "../../helpers/classNames";

const Reaction = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.reaction)} data-testid={"reaction"} {...rest}>
    {children}
  </div>
);

Reaction.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { Reaction };
