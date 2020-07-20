import React from "react";
import PropTypes from "prop-types";
import style from "./NavButton.scss";
import classNames from "../../helpers/classNames";

const NavButton = ({ children, className }) => (
  <div
    className={classNames(className, style.navbutton)}
    data-testid="navbutton"
  >
    {children}
  </div>
);

NavButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { NavButton };
