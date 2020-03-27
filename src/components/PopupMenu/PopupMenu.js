import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import style from "./PopupMenu.scss";
import { Menu } from "../Menu";

const PopupMenu = ({ children }) => {
  const menuRef = useRef();

  useEffect(() => {
    const activeItem = menuRef.current.querySelector("[data-active='true']");
    if (!activeItem) {
      menuRef.current.firstChild.focus();
    } else {
      activeItem.focus();
    }
  }, []);

  const handleArrows = e => {
    const { activeElement } = document;
    const nextEl = activeElement.nextSibling;
    const prevEl = activeElement.previousSibling;
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
    <div className={style["popup-menu"]}>
      <Menu ref={menuRef}>{children}</Menu>
    </div>
  );
};

PopupMenu.propTypes = {
  children: PropTypes.node
};

export { PopupMenu };
