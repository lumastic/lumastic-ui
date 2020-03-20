import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import style from "./Popup.scss";
import classNames from "../../helpers/classNames";
import { Modal } from "../Modal";
import useOffclick from "../../hooks/useOffclick/useOffclick";

const Popup = ({
  isShowing,
  hide,
  anchorRef,
  anchor = { v: "bottom", h: "center" },
  transform = { v: "top", h: "center" },
  children,
  className,
  ...rest
}) => {
  const popupRef = useRef();
  useOffclick(popupRef, hide);
  useEffect(() => {
    const popup = popupRef.current;
    const trig = anchorRef.current;
    if (popup && trig) {
      const {
        height: popHeight,
        width: popWidth
      } = popup.getBoundingClientRect();
      const {
        height: trigHeight,
        width: trigWidth,
        x: trigX,
        y: trigY
      } = trig.getBoundingClientRect();
      let popTop;
      let popLeft;
      switch (anchor.v) {
        case "top":
          popTop = trigY;
          break;
        case "center":
          popTop = trigY + trigHeight / 2;
          break;
        case "bottom":
          popTop = trigY + trigHeight;
          break;
        default:
          break;
      }
      switch (anchor.h) {
        case "left":
          popLeft = trigX;
          break;
        case "center":
          popLeft = trigX + trigWidth / 2;
          break;
        case "right":
          popLeft = trigX + trigWidth;
          break;
        default:
          break;
      }
      switch (transform.v) {
        case "top":
          break;
        case "center":
          popTop += popHeight / 2;
          break;
        case "bottom":
          popTop += popHeight;
          break;
        default:
          break;
      }
      switch (transform.h) {
        case "left":
          break;
        case "center":
          popLeft -= popWidth / 2;
          break;
        case "right":
          popLeft -= popWidth;
          break;
        default:
          break;
      }
      popup.style.top = `${popTop}px`;
      popup.style.left = `${popLeft}px`;
      popup.style.opacity = 1;
    }
  }, [isShowing, anchor, transform]);
  return (
    <Modal isShowing={isShowing}>
      <div
        className={classNames(className, style.popup)}
        data-testid="popup"
        ref={popupRef}
        {...rest}
      >
        {children}
      </div>
    </Modal>
  );
};

Popup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isShowing: PropTypes.bool,
  hide: PropTypes.func,
  anchorRef: PropTypes.any,
  anchor: PropTypes.shape({
    v: PropTypes.oneOf(["top", "center", "bottom"]),
    h: PropTypes.oneOf(["left", "center", "right"])
  }),
  transform: PropTypes.shape({
    v: PropTypes.oneOf(["top", "center", "bottom"]),
    h: PropTypes.oneOf(["left", "center", "right"])
  })
};

export { Popup };
