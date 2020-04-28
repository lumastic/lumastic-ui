import React from "react";
import PropTypes from "prop-types";
import style from "./SideNav.scss";
import classNames from "../../helpers/classNames";
import { Logo } from "../../icons/Logo";
import { Sparks } from "../../icons/Sparks";
import { Home } from "../../icons/Home";
import { Compass } from "../../icons/Compass";
import { Bell } from "../../icons/Bell";
import { NavIconButton } from "../../components/NavIconButton";
import { Avatar } from "../../components/Avatar";
import withLink from "../../helpers/withLink";
import {
  homeRoute,
  mySparksRoute,
  exploreRoute,
  notificationsRoute,
  profileRoute
} from "../../routes";

const SideNav = ({ className }) => (
  <nav className={classNames(className, style.sidenav)} data-testid="sidenav">
    <div className={style.logo}>
      <Logo />
    </div>
    <NavIconButton to={homeRoute} exact className={style.navbutton}>
      <Home />
    </NavIconButton>

    <NavIconButton to={mySparksRoute} className={style.navbutton}>
      <Sparks />
    </NavIconButton>

    <NavIconButton to={exploreRoute} className={style.navbutton}>
      <Compass />
    </NavIconButton>

    <NavIconButton to={notificationsRoute} className={style.navbutton}>
      <Bell />
    </NavIconButton>

    <div className={style.user}>
      {withLink(<Avatar shadow size="big" />, { to: profileRoute() })}
    </div>
  </nav>
);

SideNav.propTypes = {
  className: PropTypes.string
};

export { SideNav };
