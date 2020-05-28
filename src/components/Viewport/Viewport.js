import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useDragDrop } from "../../hooks";
import style from "./Viewport.scss";
import classNames from "../../helpers/classNames";

const Viewport = ({ children, className }) => {
  const { dragging } = useDragDrop();
  const viewportRef = useRef(null);
  const [scrolling, setScrolling] = useState({
    active: false,
    direction: null,
    speed: 1
  });

  useEffect(() => {
    // TODO: Add handler in scrolling to expand canvas with the drag
    const { active, direction, speed } = scrolling;
    const viewport = viewportRef.current;
    if (active) {
      let scrollEvent;
      const amount = parseInt(15 ** speed);
      switch (direction) {
        case "right":
          scrollEvent = setInterval(() => viewport.scrollBy(amount, 0));
          break;
        case "left":
          scrollEvent = setInterval(() => viewport.scrollBy(-amount, 0));
          break;
        case "up":
          scrollEvent = setInterval(() => viewport.scrollBy(0, -amount));
          break;
        case "down":
          scrollEvent = setInterval(() => viewport.scrollBy(0, amount));
          break;
        default:
          break;
      }
      return () => clearInterval(scrollEvent);
    }
  }, [scrolling]);

  useEffect(() => {
    const viewport = viewportRef.current;
    const checkScroll = e => {
      // Get cursor position
      const cursor = { x: e.clientX, y: e.clientY };
      // Get viewport information
      const {
        x: viewportLeft,
        y: viewportTop,
        right: viewportRight,
        bottom: viewportBottom,
        width: viewportWidth,
        height: viewportHeight
      } = viewport.getBoundingClientRect();
      // Check available scroll directions
      const canScrollRight =
        viewport.scrollLeft + viewportWidth < viewport.scrollWidth;
      const canScrollLeft = viewport.scrollLeft !== 0;
      const canScrollUp = viewport.scrollTop !== 0;
      const canScrollDown =
        viewport.scrollTop + viewportHeight < viewport.scrollHeight;

      // Check if mouse position is on the edge
      if (cursor.x > viewportRight - 40 && canScrollRight) {
        setScrolling({
          active: true,
          direction: "right",
          speed: 1 - (viewportRight - cursor.x) / 40
        });
      } else if (cursor.x < viewportLeft + 30 && canScrollLeft) {
        setScrolling({
          active: true,
          direction: "left",
          speed: 1 - (cursor.x - viewportLeft) / 30
        });
      } else if (cursor.y > viewportBottom - 40 && canScrollDown) {
        setScrolling({
          active: true,
          direction: "down",
          speed: 1 - (viewportBottom - cursor.y) / 40
        });
      } else if (cursor.y < viewportTop + 30 && canScrollUp) {
        setScrolling({
          active: true,
          direction: "up",
          speed: 1 - (cursor.y - viewportBottom) / 30
        });
      } else {
        setScrolling(false);
      }
    };
    if (dragging) {
      document.addEventListener("mousemove", checkScroll);
    } else {
      setScrolling(false);
      document.removeEventListener("mousemove", checkScroll);
    }
    return () => document.removeEventListener("mousemove", checkScroll);
  }, [dragging]);

  return (
    <div className={classNames(style.viewport, className)} ref={viewportRef}>
      {children}
    </div>
  );
};

Viewport.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { Viewport };
