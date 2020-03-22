import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import style from "./Tooltip.scss";
import classNames from "../../helpers/classNames";
import { Modal } from "../Modal";

const Tooltip = ({ children, className, label }) => {
  const [showing, setShowing] = useState(false);
  const tooltipRef = useRef(null);
  const elementRef = useRef(null);

  useEffect(() => {
    if (showing) {
      console.log("Showing");
    }
  }, [showing]);

  const onMouseEnter = () => {
    setShowing(true);
  };

  const onMouseLeave = () => {
    setShowing(false);
  };

  return (
    <>
      <div
        className={style["tooltip-element"]}
        data-testid="tooltip"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onMouseEnter}
        onBlur={onMouseLeave}
        ref={elementRef}
      >
        {children}
      </div>
      <Modal isShowing={showing} disablePortal>
        <div ref={tooltipRef} className={classNames(className, style.tooltip)}>
          {label}
        </div>
      </Modal>
    </>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  className: PropTypes.string
};

export { Tooltip };
