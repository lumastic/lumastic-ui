import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import style from "../Select.scss";

const SelectOptions = ({ children }) => {
  const optionsRef = useRef();

  const handleArrows = e => {
    const selectedOption = optionsRef.current.querySelector(
      "[aria-selected='true']"
    );
    const focusedElement = document.activeElement || selectedOption;
    const nextEl = focusedElement.nextSibling;
    const prevEl = focusedElement.previousSibling;
    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        if (prevEl) prevEl.focus();
        break;
      case "ArrowDown":
        e.preventDefault();
        if (nextEl) nextEl.focus();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleArrows);
    return () => {
      window.removeEventListener("keydown", handleArrows);
    };
  }, []);

  return (
    <div role="listbox" className={style["select-options"]} ref={optionsRef}>
      {children}
    </div>
  );
};

SelectOptions.propTypes = {
  children: PropTypes.node
};

export { SelectOptions };
