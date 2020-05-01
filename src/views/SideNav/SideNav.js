import React from "react";
import PropTypes from "prop-types";
import { Logo } from "../../icons/Logo";
import { Sparks } from "../../icons/Sparks";
import { Home } from "../../icons/Home";
import { MagnifyingGlass } from "../../icons/MagnifyingGlass";
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
import style from "./SideNav.scss";
import classNames from "../../helpers/classNames";

const SideNav = ({ className }) => (
  <nav className={classNames(className, style.sidenav)} data-testid="sidenav">
    <div className={style.logo}>
      <Logo />
    </div>
    <div className={style.navbutton}>
      <NavIconButton to={homeRoute} exact>
        <Home />
      </NavIconButton>
    </div>

    <div className={style.navbutton}>
      <NavIconButton to={mySparksRoute}>
        <Sparks />
      </NavIconButton>
    </div>

    <div className={style.navbutton}>
      <NavIconButton to={exploreRoute}>
        <MagnifyingGlass />
      </NavIconButton>
    </div>

    <div className={style.navbutton}>
      <NavIconButton to={notificationsRoute}>
        <Bell />
      </NavIconButton>
    </div>

    <div className={style.user}>
      {withLink(<Avatar shadow size="big" />, { to: profileRoute() })}
    </div>
  </nav>
);

SideNav.propTypes = {
  className: PropTypes.string
};

export { SideNav };
