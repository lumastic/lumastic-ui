import PropTypes from "prop-types";
import React from "react";
import {
  Link,
  MenuItem,
  NavIconButton,
  Popup,
  PopupContent,
  PopupMenu,
  PopupTrigger,
  Type
} from "../../components";
import classNames from "../../helpers/classNames";
import {
  Bell,
  Home,
  MagnifyingGlass,
  Plus,
  PostPlus,
  SparkPlus,
  Sparks
} from "../../icons";
import {
  createPostRoute,
  createSparkRoute,
  exploreRoute,
  homeRoute,
  mySparksRoute,
  notificationsRoute,
  viewBoardRoute,
  viewSparkRoute
} from "../../routes";
import { Signature } from "../../templates";
import style from "./MobileNav.scss";

const MobileNav = ({ className }) => (
  <nav className={classNames(className, style.sidenav)} data-testid="sidenav">
    <div className={style.navbutton}>
      <NavIconButton mobile to={homeRoute} exact icon={<Home />}>
        <Home />
      </NavIconButton>
    </div>
    <div className={style.navbutton}>
      <NavIconButton
        mobile
        to={[mySparksRoute, viewSparkRoute(), viewBoardRoute()]}
        icon={<Sparks />}
      >
        <Sparks />
      </NavIconButton>
    </div>
    <div className={classNames(style.navbutton)}>
      <Popup
        anchor={{ v: "bottom", h: "center" }}
        transform={{ v: "bottom", h: "center" }}
        className={style.new}
      >
        <PopupTrigger>
          <NavIconButton mobile icon={<Plus />}>
            <Plus />
          </NavIconButton>
        </PopupTrigger>
        <PopupContent render={PopupMenu}>
          <Link button to={createSparkRoute}>
            <MenuItem>
              <Signature>
                <SparkPlus />
                <Type>New Spark</Type>
              </Signature>
            </MenuItem>
          </Link>
          <Link button to={createPostRoute}>
            <MenuItem>
              <Signature>
                <PostPlus />
                <Type>New Post</Type>
              </Signature>
            </MenuItem>
          </Link>
        </PopupContent>
      </Popup>
    </div>
    <div className={style.navbutton}>
      <NavIconButton mobile to={exploreRoute} icon={<MagnifyingGlass />}>
        <MagnifyingGlass />
      </NavIconButton>
    </div>
    <div className={style.navbutton}>
      <NavIconButton mobile to={notificationsRoute} icon={<Bell />}>
        <Bell />
      </NavIconButton>
    </div>
  </nav>
);

MobileNav.propTypes = {
  className: PropTypes.string
};

export { MobileNav };
