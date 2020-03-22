import React, { useContext } from "react";
import PropTypes from "prop-types";
import PopupContext from "./PopupContext";
import style from "../Popup.scss";

const PopupTrigger = ({ children }) => {
  const { toggle, setTrigger } = useContext(PopupContext);

  const handleClick = e => {
    e.preventDefault();
    toggle();
  };

  const handleEnter = e => {
    e.preventDefault();
    if (e.keyCode === 13) {
      toggle();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      ref={ref => setTrigger(ref)}
      onClick={handleClick}
      className={style["popup-trigger"]}
      onKeyDown={handleEnter}
    >
      {children}
    </div>
  );
};

PopupTrigger.propTypes = {
  children: PropTypes.node
};

export { PopupTrigger };
