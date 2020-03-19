import React from "react";
import PropTypes from "prop-types";
import style from "./Dialog.scss";
import classNames from "../../helpers/classNames";

const Dialog = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.dialog)} data-testid={"dialog"} {...rest}>
    {children}
  </div>
);

Dialog.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { Dialog };
