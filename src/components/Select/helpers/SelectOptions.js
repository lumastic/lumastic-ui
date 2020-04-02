import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import style from "../Select.scss";

const SelectOptions = ({ children }) => {
  const optionsRef = useRef();

  const handleArrows = e => {
    if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
    const selectedOption = optionsRef.current.querySelector(
      "[aria-selected='true']"
    );
    let focusedElement;
    if (optionsRef.current.contains(document.activeElement)) {
      focusedElement = document.activeElement;
    } else if (selectedOption) {
      focusedElement = selectedOption;
    }
    const nextEl = focusedElement ? focusedElement.nextSibling : null;
    const prevEl = focusedElement ? focusedElement.previousSibling : null;
    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        if (prevEl) {
          prevEl.focus();
        } else {
          optionsRef.current.firstChild.focus();
        }
        break;
      case "ArrowDown":
        e.preventDefault();
        if (nextEl) {
          nextEl.focus();
        } else {
          optionsRef.current.firstChild.focus();
        }
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
