import React, { useContext, createElement } from "react";
import PropTypes from "prop-types";
import PopupContext from "./PopupContext";
import { Modal } from "../../Modal";
import style from "../Popup.scss";
import classNames from "../../../helpers/classNames";

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
    </Modal>
  );
};

PopupContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  render: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
};

export { PopupContent };
