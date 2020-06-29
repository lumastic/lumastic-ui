import React, { useContext } from "react";
import PropTypes from "prop-types";
import PopupContext from "./PopupContext";
import { classNames } from "../../../helpers";
import style from "../Popup.scss";

const PopupTrigger = ({ className, children }) => {
  const { toggle, setTrigger } = useContext(PopupContext);

  const handleClick = () => {
    toggle();
  };

  const handleEnter = e => {
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
      className={classNames(className, style["popup-trigger"])}
      onKeyDown={handleEnter}
    >
      {children}
    </div>
  );
};

PopupTrigger.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export { PopupTrigger };
