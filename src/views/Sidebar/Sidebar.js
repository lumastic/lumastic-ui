import PropTypes from "prop-types";
import React from "react";
import {
  Divider,
  Label,
  Link,
  NavButton,
  Type,
  Popup,
  PopupTrigger,
  PopupContent,
  PopupMenu,
  MenuItem
} from "../../components";
import classNames from "../../helpers/classNames";
import {
  Bell,
  Compass,
  Home,
  MagnifyingGlass,
  Plus,
  SparkPlus,
  PostPlus,
  Logo,
  LogoText
} from "../../icons";
import {
  createRoute,
  createSparkRoute,
  exploreRoute,
  findRoute,
  homeRoute,
  notificationsRoute,
  createPostRoute
} from "../../routes";
import { SparksNav, Signature } from "../../templates";
import style from "./Sidebar.scss";

const Sidebar = ({ className, version, sparks = [] }) => (
  <nav className={classNames(className, style.sidebar)} data-testid="sidebar">
    <div className={style["main-btns"]}>
      <NavButton to={homeRoute} exact>
        <Type tag="div" h4 className={style.type} setSize="1.1rem">
          <Home /> Home
        </Type>
      </NavButton>
      <NavButton to={exploreRoute}>
        <Type tag="div" h4 className={style.type} setSize="1.1rem">
          <MagnifyingGlass /> Explore
        </Type>
      </NavButton>
      {/* <NavButton to={findRoute} path={findRoute.pathname} exact>
        <Type tag="div" h4 className={style.type}>
          <MagnifyingGlass /> Find
        </Type>
      </NavButton> */}
      {/* <NavButton to={createRoute} path={createRoute.pathname} exact>
        <Type tag="div" h4 className={style.type}>
          <Plus /> Create
        </Type>
      </NavButton> */}
      <Popup
        anchor={{ v: "top", h: "left" }}
        transform={{ v: "top", h: "left" }}
        className={style.popup}
      >
        <PopupTrigger className={style.trigger}>
          <NavButton>
            <Type tag="div" h4 className={style.type} setSize="1.1rem">
              <Plus /> Create
            </Type>
          </NavButton>
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
      <NavButton to={notificationsRoute} exact>
        <Type tag="div" h4 className={style.type} setSize="1.1rem">
          <Bell /> Notifications
        </Type>
      </NavButton>
    </div>

    <div className={style.divider}>
      <Divider />
    </div>

    <div className={style.sparks}>
      <div className={style.sparksnav}>
        <Label className={style.label}>MY SPARKS</Label>
        <SparksNav sparks={sparks} />
      </div>

      <NavButton to={createSparkRoute} exact path={createSparkRoute.pathname}>
        <Type body2 tag="div" color="primary" className={style.type}>
          <Plus /> <b>NEW SPARK</b>
        </Type>
      </NavButton>
    </div>

    {/* <div className={style.divider}>
      <Divider />
    </div> */}

    {/* <div className={style["bottom-btns"]}>
      <NavButton>
        <Type body2 tag="div" className={style.type}>
          <Trash /> Archive
        </Type>
      </NavButton>
      <NavButton>
        <Type body2 tag="div" className={style.type}>
          Store
        </Type>
      </NavButton>
    </div> */}
    <div className={style["bottom-btns"]}>
      <div className={style["logo-container"]}>
        <div className={style.logo}>
          <span className={style.symbol}>
            <Logo />
          </span>
          <span className={style.text}>
            <LogoText />
          </span>
        </div>
        <div className={style.links}>
          <Link to="/version">
            <Type caption>v{version}</Type>
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

Sidebar.propTypes = {
  version: PropTypes.string,
  className: PropTypes.string,
  sparks: PropTypes.array
};

export { Sidebar };
