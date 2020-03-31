import PropTypes from "prop-types";
import React, { createElement, useContext } from "react";
import classNames from "../../../helpers/classNames";
import { Modal } from "../../Modal";
import style from "../Popup.scss";
import PopupContext from "./PopupContext";
import { PopupEscape } from "./PopupEscape";

const PopupContent = ({ children, className, render }) => {
  const { isShowing, setPopup } = useContext(PopupContext);

  return (
    <Modal isShowing={isShowing} disablePortal>
      <div className={style["popup-content"]} ref={ref => setPopup(ref)}>
        {render ? (
          createElement(render, { children })
        ) : (
          <div className={classNames(className, style.popup)}>{children}</div>
        )}
      </div>
      <PopupEscape />
    </Modal>
  );
};

PopupContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  render: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
};

export { PopupContent };
