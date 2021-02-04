/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";
import React, { createContext, useRef } from "react";
import classNames from "../../helpers/classNames";
import { Times } from "../../icons/Times";
import { IconButton } from "../IconButton";
import { Modal } from "../Modal";
import style from "./Dialog.scss";

const DialogContext = createContext();

const Dialog = ({
  children,
  className,
  isShowing = false,
  hide = () => alert("Dialog Close"),
  disablePortal = false
}) => {
  const ref = useRef();
  // useOffclick(ref, hide);
  function offClick(e) {
    if (e.target === e.currentTarget) {
      hide();
    }
  }
  return (
    <Modal isShowing={isShowing} disablePortal={disablePortal}>
      {/* DialogContext allows componenets to get it's properties i.e. a submit button should hide the modal */}
      <DialogContext.Provider value={{ isShowing, hide }}>
        <div className={style["dialog-modal"]}>
          <div className={style["dialog-cover"]} />
          <div className={style["dialog-area"]}>
            <div className={style["dialog-scroll"]}>
              <div
                className={classNames(className, style.dialog)}
                data-testid="dialog"
                ref={ref}
              >
                <div className={style["dialog-close"]}>
                  <IconButton color="grey" onClick={() => hide()}>
                    <Times />
                  </IconButton>
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </DialogContext.Provider>
    </Modal>
  );
};

Dialog.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isShowing: PropTypes.bool,
  hide: PropTypes.func,
  disablePortal: PropTypes.bool
};

export { Dialog };
