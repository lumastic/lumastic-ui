import React from "react";
import PropTypes from "prop-types";
import style from "./Menu.scss";
import classNames from "../../helpers/classNames";
import { Label } from "../Label";

const Menu = ({ children, className, label }) => (
  <div className={classNames(className, style.menu)} data-testid="menu">
    {label ? <Label className={style["menu-label"]}>{label}</Label> : null}
    {children}
  </div>
);

Menu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string
};

export { Menu };
