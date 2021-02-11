import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Menu } from "../Menu";
import style from "./PopupMenu.scss";
import { classNames } from "../../helpers";

const PopupMenu = ({ children, className, triggerEl, ...rest }) => {
  const menuRef = useRef();

  const handleArrows = e => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();

      // Check if activeElement is inside the menuRef
      const { activeElement } = document;
      let nextEl;
      let prevEl;

      if (menuRef.current.contains(activeElement)) {
        if (
          activeElement === menuRef.current.firstChild &&
          triggerEl?.current
        ) {
          prevEl = triggerEl?.current;
          nextEl = activeElement.nextSibling;
        } else if (activeElement === menuRef.current.lastChild) {
          nextEl = menuRef.current.firstChild;
          prevEl = activeElement.previousSibling;
        } else {
          prevEl = activeElement.previousSibling;
          nextEl = activeElement.nextSibling;
        }
      } else {
        nextEl = menuRef.current.firstChild;
        prevEl = menuRef.current.lastChild;
      }

      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          console.log(prevEl);
          if (prevEl) prevEl.focus();
          break;
        case "ArrowDown":
          e.preventDefault();
          console.log(nextEl);
          if (nextEl) nextEl.focus();
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleArrows);
    return () => {
      document.removeEventListener("keydown", handleArrows);
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
  className: PropTypes.string,
  triggerEl: PropTypes.node
};

export { PopupMenu };
