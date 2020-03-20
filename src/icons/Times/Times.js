import React from "react";
import style from "./Times.scss";

const Times = () => (
  <svg viewBox="0 0 32 32" className={style.times}>
    <line x1="4" y1="28" x2="28" y2="4" />
    <line x1="4" y1="4" x2="28" y2="28" />
  </svg>
);

export { Times };
