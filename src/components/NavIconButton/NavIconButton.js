/* eslint-disable react/no-children-prop */

import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import style from "./NavIconButton.scss";
import classNames from "../../helpers/classNames";
import { IconButton } from "../IconButton";
import { Link } from "../Link";

const NavIconButton = ({
  children,
  className,
  to,
  exact,
  disabled,
  name,
  icon,
  mobile
}) => (
  <Route
    path={to}
    exact={exact}
    children={({ match }) => (
      <Link to={to} button>
        <IconButton
          className={classNames(className, style.naviconbutton)}
          color={to && match ? "primary" : "grey"}
          variant={to && match && "contained"}
          setSize="1.25rem"
          disabled={disabled}
        >
          {icon}
        </IconButton>
      </Link>
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
  disabled: PropTypes.bool,
  mobile: PropTypes.bool
};

export { NavIconButton };
