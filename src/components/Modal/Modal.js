import React from "react";
import PropTypes from "prop-types";
import style from "./Modal.scss";
import classNames from "../../helpers/classNames";

const Modal = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.modal)} data-testid={"modal"} {...rest}>
    {children}
  </div>
);

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { Modal };
