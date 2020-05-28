import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Menu } from "../Menu";
import style from "./PopupMenu.scss";
import { classNames } from "../../helpers";

const PopupMenu = ({ children, className, ...rest }) => {
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
    <div className={classNames(style["popup-menu"], className)} {...rest}>
      <Menu ref={menuRef}>{children}</Menu>
    </div>
  );
};

PopupMenu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { PopupMenu };
