import React from "react";
import style from "./Dot.scss";

const Dot = () => (
  <svg viewBox="0 0 32 32" className={style.dot}>
    <circle cx="16" cy="16" r="16" />
  </svg>
);

export { Dot };
