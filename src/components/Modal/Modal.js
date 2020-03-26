import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

const Modal = ({ isShowing = false, disablePortal = false, children }) => {
  const component = <>{children}</>;
  if (isShowing) {
    if (disablePortal) {
      return component;
    }
    return ReactDOM.createPortal(component, document.body);
  }
  return null;
};

Modal.propTypes = {
  children: PropTypes.node,
  isShowing: PropTypes.bool,
  disablePortal: PropTypes.bool
};

export { Modal };
