/* eslint-disable react/no-children-prop */

import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import style from "./NavIconButton.scss";
import classNames from "../../helpers/classNames";

const NavIconButton = ({ children, className, to, exact }) => (
  <Route
    path={to}
    exact={exact}
    children={({ match, history }) => (
      <button
        className={classNames(className, style.naviconbutton, {
          [style.active]: to && match
        })}
        data-testid="naviconbutton"
        onClick={() => to && history.push(typeof to === "string" ? to : to[0])}
      >
        {children}
      </button>
    )}
  />
);

NavIconButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  exact: PropTypes.bool
};

export { NavIconButton };
