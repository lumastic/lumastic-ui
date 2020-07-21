/* eslint-disable react/no-children-prop */
import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import style from "./NavButton.scss";
import classNames from "../../helpers/classNames";

const NavButton = ({ children, className, to, exact }) => (
  <Route
    path={to}
    exact={exact}
    children={({ match, history }) => (
      <button
        className={classNames(className, style.navbutton, {
          [style.active]: to && match
        })}
        data-testid="navbutton"
        onClick={() => to && history.push(typeof to === "string" ? to : to[0])}
      >
        <div className={style.container}>{children}</div>
      </button>
    )}
  />
);

NavButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  exact: PropTypes.bool
};

export { NavButton };
