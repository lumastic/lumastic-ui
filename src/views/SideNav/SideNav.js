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

const SideNav = ({ className }) => (
  <nav className={classNames(className, style.sidenav)} data-testid="sidenav">
    <div className={style.logo}>
      <Logo />
    </div>
    <NavIconButton active className={style.navbutton}>
      <Home />
    </NavIconButton>

    <NavIconButton className={style.navbutton}>
      <Sparks />
    </NavIconButton>

    <NavIconButton className={style.navbutton}>
      <Compass />
    </NavIconButton>

    <NavIconButton className={style.navbutton}>
      <Bell />
    </NavIconButton>

    <div className={style.user}>
      <Avatar shadow size="big" />
    </div>
  </nav>
);

SideNav.propTypes = {
  className: PropTypes.string
};

export { SideNav };
