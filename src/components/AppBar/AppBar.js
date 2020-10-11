import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";
import { Avatar, NavIconButton } from "..";
import { SearchForm } from "../../forms";
import classNames from "../../helpers/classNames";
import { useUser } from "../../hooks";
import {
  Bell,
  Home,
  Logo,
  LogoText,
  MagnifyingGlass,
  Sparks
} from "../../icons";
import {
  exploreRoute,
  homeRoute,
  mySparksRoute,
  notificationsRoute,
  profileRoute,
  searchRoute,
  viewBoardRoute,
  viewSparkRoute
} from "../../routes";
import { IconButton } from "../IconButton";
import { Link } from "../Link";
import style from "./AppBar.scss";

const AppBar = ({ children, className }) => {
  const { avatarURL, username } = useUser();
  const history = useHistory();
  const onSearch = searchString => {
    history.push(searchRoute(searchString));
  };
  return (
    <header
      className={classNames(className, style.appbar)}
      data-testid="appbar"
    >
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
          <SearchForm
            placeholder="Search..."
            className={style.search}
            onSearch={onSearch}
          />
          <div className={style.searchBtn}>
            <Link button to={exploreRoute}>
              <IconButton color="grey" size="big">
                <MagnifyingGlass />
              </IconButton>
            </Link>
          </div>
          <Link to={profileRoute(username)} inline>
            <Avatar src={avatarURL} />
          </Link>
        </div>
      </div>
    </header>
  );
};

AppBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { AppBar };
