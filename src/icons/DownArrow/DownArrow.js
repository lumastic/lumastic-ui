import React from "react";
import style from "./DownArrow.scss";

const DownArrow = () => (
  <svg viewBox="0 0 32 20" className={style.downarrow}>
    <line x1="5" y1="4" x2="16" y2="16" />
    <line x1="27" y1="4" x2="16" y2="16" />
  </svg>
);

export { DownArrow };
