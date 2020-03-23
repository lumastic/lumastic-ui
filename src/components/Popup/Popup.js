import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "../../helpers/classNames";
import useModal from "../../hooks/useModal";
import useOffclick from "../../hooks/useOffclick/useOffclick";
import PopupContext from "./helpers/PopupContext";
import popupPosition from "../../helpers/popupPosition";
import style from "./Popup.scss";

const Popup = ({
  anchor = { v: "bottom", h: "center" },
  transform = { v: "top", h: "center" },
  children,
  className,
  onOpen,
  onClose
}) => {
  const [trigger, setTrigger] = useState(null);
  const [popup, setPopup] = useState(null);
  const [isShowing, toggle] = useModal(false);
  const popContainer = useRef();
  const popoverProviderValue = {
    setPopup,
    setTrigger,
    isShowing,
    toggle
  };

  useOffclick(popContainer, toggle);

  useEffect(() => {
    if (popup && trigger) {
      const [popTop, popLeft] = popupPosition(
        anchor,
        transform,
        trigger,
        popup
      );
      popup.style.top = `${popTop}px`;
      popup.style.left = `${popLeft}px`;
      popup.style.opacity = 1;
    }
  }, [isShowing, anchor, transform, trigger, popup]);

  useEffect(() => {
    if (isShowing) {
      if (onOpen) onOpen();
    } else {
      if (trigger) trigger.focus();
      if (onClose) onClose();
    }
  }, [isShowing, onOpen, onClose, trigger]);

  return (
    <PopupContext.Provider value={popoverProviderValue}>
      <div
        ref={popContainer}
        data-testid="popup"
        className={classNames(className, style["popup-container"])}
      >
        {children}
      </div>
    </PopupContext.Provider>
  );
};

Popup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /** { v: "top" | "center" | "bottom", h: "left" | "center" | "right" } */

  anchor: PropTypes.shape({
    v: PropTypes.oneOf(["top", "center", "bottom"]),
    h: PropTypes.oneOf(["left", "center", "right"])
  }),
  /** { v: "top" | "center" | "bottom", h: "left" | "center" | "right" } */

  transform: PropTypes.shape({
    v: PropTypes.oneOf(["top", "center", "bottom"]),
    h: PropTypes.oneOf(["left", "center", "right"])
  }),
  onOpen: PropTypes.func,
  onClose: PropTypes.func
};

export { Popup, PopupContext };
