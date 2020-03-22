import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import style from "./Tooltip.scss";
import classNames from "../../helpers/classNames";
import { Modal } from "../Modal";
import { Type } from "../Type/Type";
import tooltipPosition from "../../helpers/tooltipPosition";

const Tooltip = ({
  position = "bottom",
  children,
  className,
  label,
  noDelay = false
}) => {
  const [showing, setShowing] = useState(false);
  const tooltipRef = useRef(null);
  const elementRef = useRef(null);

  useEffect(() => {
    if (!(tooltipRef && elementRef)) return;
    const tooltip = tooltipRef.current;
    const element = elementRef.current;
    if (tooltip && element) {
      const [toolTop, toolLeft] = tooltipPosition(position, element, tooltip);

      tooltip.style.top = `${toolTop}px`;
      tooltip.style.left = `${toolLeft}px`;
      tooltip.style.opacity = 1;
    }
  }, [showing, position, tooltipRef, elementRef]);

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
      <Modal isShowing={showing}>
        <div
          ref={tooltipRef}
          className={classNames(style["tooltip-content"], {
            [style["no-delay"]]: noDelay
          })}
        >
          <div
            className={classNames(className, style.tooltip, style[position])}
          >
            <Type caption>{label}</Type>
          </div>
        </div>
      </Modal>
    </>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  noDelay: PropTypes.bool,
  className: PropTypes.string,
  position: PropTypes.oneOf(["top", "bottom", "left", "right"])
};

export { Tooltip };
