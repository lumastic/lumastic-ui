/* eslint-disable react/no-children-prop */
import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import style from "./NavButton.scss";
import classNames from "../../helpers/classNames";
import { Link } from "../Link";

const NavButton = ({ children, className, path, exact, to }) => (
  <Route
    path={path || to}
    exact={exact}
    children={({ match }) => (
      <Link to={to} button>
        <button
          className={classNames(className, style.navbutton, {
            [style.active]: to && match
          })}
          data-testid="navbutton"
        >
          <div className={style.container}>{children}</div>
        </button>
      </Link>
    )}
  />
);

NavButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  path: PropTypes.string,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  exact: PropTypes.bool
};

export { NavButton };
