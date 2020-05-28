import PropTypes from "prop-types";
import React from "react";
import {
  IconButton,
  MenuItem,
  NavIconButton,
  Popup,
  PopupContent,
  PopupMenu,
  PopupTrigger,
  Type,
  Link
} from "../../components";
import { Signature } from "../../templates";
import classNames from "../../helpers/classNames";
import {
  Bell,
  Home,
  Logo,
  MagnifyingGlass,
  Plus,
  Sparks,
  SparkPlus,
  PostPlus
} from "../../icons";
import {
  exploreRoute,
  homeRoute,
  mySparksRoute,
  createPostRoute,
  createSparkRoute,
  notificationsRoute,
  viewSparkRoute,
  viewBoardRoute
} from "../../routes";
import style from "./SideNav.scss";

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
      <NavIconButton to={[mySparksRoute, viewSparkRoute(), viewBoardRoute()]}>
        <Sparks />
      </NavIconButton>
    </div>

    <div className={classNames(style.navbutton, style.new)}>
      <Popup
        anchor={{ v: "bottom", h: "center" }}
        transform={{ v: "bottom", h: "center" }}
      >
        <PopupTrigger>
          <NavIconButton>
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
      <NavIconButton to={exploreRoute}>
        <MagnifyingGlass />
      </NavIconButton>
    </div>

    <div className={style.navbutton}>
      <NavIconButton to={notificationsRoute}>
        <Bell />
      </NavIconButton>
    </div>

    <div className={style.fab}>
      <Popup
        anchor={{ v: "bottom", h: "left" }}
        transform={{ v: "bottom", h: "left" }}
      >
        <PopupTrigger>
          <IconButton size="big" variant="contained" color="accent" shadow>
            <Plus />
          </IconButton>
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
  </nav>
);

SideNav.propTypes = {
  className: PropTypes.string
};

export { SideNav };
