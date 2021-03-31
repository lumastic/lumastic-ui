/* eslint-disable react/no-children-prop */

import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { Type } from "../Type";
import style from "./NavIconButton.scss";
import classNames from "../../helpers/classNames";
import { IconButton } from "../IconButton";

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
      <IconButton
        className={classNames(className, style.naviconbutton)}
        color={to && match ? "primary" : "grey"}
        variant={to && match && "contained"}
        setSize="1.25rem"
        onClick={() => to && history.push(typeof to === "string" ? to : to[0])}
      >
        {icon}
      </IconButton>
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
