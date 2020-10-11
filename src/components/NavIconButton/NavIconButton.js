/* eslint-disable react/no-children-prop */

import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { Type } from "../Type";
import style from "./NavIconButton.scss";
import classNames from "../../helpers/classNames";

const NavIconButton = ({
  children,
  className,
  to,
  exact,
  name,
  icon,
  mobile
}) => (
  <Route
    path={to}
    exact={exact}
    children={({ match, history }) => (
      <button
        className={classNames(
          className,
          style.naviconbutton,
          {
            [style.active]: to && match
          },
          { [style.mobile]: mobile }
        )}
        data-testid="naviconbutton"
        onClick={() => to && history.push(typeof to === "string" ? to : to[0])}
      >
        <div className={style.icon}>{icon}</div>
        <Type className={style.name} overline align="center">
          {name}
        </Type>
      </button>
    )}
  />
);

NavIconButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.node,
  name: PropTypes.string,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  exact: PropTypes.bool,
  mobile: PropTypes.bool
};

export { NavIconButton };
