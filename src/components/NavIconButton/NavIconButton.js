import React from "react";
import PropTypes from "prop-types";
import style from "./NavIconButton.scss";
import classNames from "../../helpers/classNames";

const NavIconButton = ({ children, className, active, ...rest }) => (
  <button
    className={classNames(className, style.naviconbutton, {
      [style.active]: active
    })}
    data-testid="naviconbutton"
    {...rest}
  >
    {children}
  </button>
);

NavIconButton.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  className: PropTypes.string
};

export { NavIconButton };
