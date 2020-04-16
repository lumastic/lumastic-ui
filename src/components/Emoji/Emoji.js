import React from "react";
import PropTypes from "prop-types";
import style from "./Emoji.scss";
import classNames from "../../helpers/classNames";

const Emoji = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.emoji)} data-testid={"emoji"} {...rest}>
    {children}
  </div>
);

Emoji.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { Emoji };
