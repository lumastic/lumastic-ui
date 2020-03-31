import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import style from "./Menu.scss";
import classNames from "../../helpers/classNames";
import { Label } from "../Label";

const Menu = forwardRef(({ children, className, label }, ref) => (
  <div
    className={classNames(className, style.menu)}
    role="listbox"
    data-testid="menu"
    ref={ref}
  >
    {label ? <Label className={style["menu-label"]}>{label}</Label> : null}
    {children}
  </div>
));

Menu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string
};

export { Menu };
