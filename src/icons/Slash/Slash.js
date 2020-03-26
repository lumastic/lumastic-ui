import React from "react";
import { Icon } from "../Icon";
import icon from "./Slash.svg";
import style from "./Slash.scss";

const Slash = () => (
  <div className={style.slash}>
    <Icon icon={icon} />
  </div>
);

export { Slash };
