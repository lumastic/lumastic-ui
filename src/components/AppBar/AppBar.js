import PropTypes from "prop-types";
import React from "react";
import classNames from "../../helpers/classNames";
import {
  Logo,
  LogoText,
  Sparks,
  Home,
  MagnifyingGlass,
  Bell
} from "../../icons";
import {
  exploreRoute,
  homeRoute,
  mySparksRoute,
  notificationsRoute,
  viewBoardRoute,
  viewSparkRoute
} from "../../routes";
import { NavIconButton, Search, Avatar } from "..";
import style from "./AppBar.scss";

const AppBar = ({ children, className }) => (
  <header className={classNames(className, style.appbar)} data-testid="appbar">
    <div className={style["logo-container"]}>
      <span className={style.symbol}>
        <Logo />
      </span>
      <span className={style.text}>
        <LogoText />
      </span>
    </div>
    <div className={style["mainbtns-container"]}>
      <div className={style.mainbtns}>
        <div className={style.navbutton}>
          <NavIconButton to={homeRoute} exact icon={<Home />} name="HOME" />
        </div>
        <div className={style.navbutton}>
          <NavIconButton
            to={[mySparksRoute, viewSparkRoute(), viewBoardRoute()]}
            icon={<Sparks />}
            name="MY SPARKS"
          />
        </div>
        <div className={style.navbutton}>
          <NavIconButton
            to={exploreRoute}
            icon={<MagnifyingGlass />}
            name="EXPLORE"
          />
        </div>
        <div className={style.navbutton}>
          <NavIconButton
            to={notificationsRoute}
            icon={<Bell />}
            name="NOTIFICATIONS"
          />
        </div>
      </div>
    </div>

    <div className={style["menu-container"]}>
      <div className={style["menu-items"]}>
        <Search />
        <Avatar />
      </div>
    </div>
  </header>
);

AppBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { AppBar };
