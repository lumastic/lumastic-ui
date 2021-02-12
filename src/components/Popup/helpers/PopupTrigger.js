import React, { createElement, useContext } from "react";
import PropTypes from "prop-types";
import PopupContext from "./PopupContext";
import { classNames } from "../../../helpers";
import style from "../Popup.scss";

// TODO: add a render prop to PopupTrigger ala PopupContent
const PopupTrigger = ({ className, render, children, ...props }) => {
  const { toggle, setTrigger } = useContext(PopupContext);

  const handleClick = e => {
    e.stopPropagation();
    toggle();
  };

  const handleEnter = e => {
    e.stopPropagation();
    if (e.keyCode === 13) {
      toggle();
    }
  };
  // if render is present, createElement(render, { toggle }) ala PopupContent
  return (
    <>
      {render ? (
        createElement(render, { toggle, setTrigger, ...props })
      ) : (
        <div
          role="button"
          tabIndex={0}
          ref={ref => setTrigger(ref)}
          onClick={handleClick}
          className={classNames(className, style["popup-trigger"])}
          onKeyDown={handleEnter}
        >
          {children}
        </div>
      )}
    </>
  );
};

PopupTrigger.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  render: PropTypes.func
};

export { PopupTrigger };
