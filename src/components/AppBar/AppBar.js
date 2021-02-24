import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";
import { Avatar, NavIconButton } from "..";
import classNames from "../../helpers/classNames";
import { useUser } from "../../hooks";
import {
  Bell,
  ChatExclamation,
  Chevron,
  Compass,
  Gear,
  Home,
  LogOut,
  MagnifyingGlass,
  PaperAirplane,
  Sparks
} from "../../icons";
import {
  exploreRoute,
  feedbackRoute,
  homeRoute,
  logoutRoute,
  mySparksRoute,
  notificationsRoute,
  profileRoute,
  searchRoute,
  sendInviteRoute,
  settingsRoute,
  viewBoardRoute,
  viewSparkRoute
} from "../../routes";
import { Signature } from "../../templates";
import { Badge } from "../Badge";
import { Divider } from "../Divider";
import { IconButton } from "../IconButton";
import { Link } from "../Link";
import { Logo } from "../Logo";
import { MenuItem } from "../Menu";
import { useNotify } from "../Notify";
import { Popup, PopupContent, PopupTrigger } from "../Popup";
import { PopupMenu } from "../PopupMenu";
import { Type } from "../Type";
import style from "./AppBar.scss";

const AppBar = ({ className }) => {
  const {
    avatarURL,
    username,
    name,
    userProfile: { isLicensed } = {}
  } = useUser();
  const { newUnread } = useNotify();
  const history = useHistory();
  const onSearch = searchString => {
    history.push(searchRoute(searchString));
  };
  return (
    <header
      className={classNames(className, style.appbar)}
      data-testid="appbar"
    >
      <Link to="/" button inline>
        <Logo />
      </Link>
      <div className={style["mainbtns-container"]}>
        <div className={style.mainbtns}>
          <div className={style.navbutton}>
            <NavIconButton to={homeRoute} icon={<Home />} name="HOME" />
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
              icon={<Compass />}
              name="EXPLORE"
            />
          </div>
          <div className={style.navbutton}>
            <NavIconButton
              to={notificationsRoute}
              icon={
                <Badge off={!newUnread} color="secondary">
                  <Bell />
                </Badge>
              }
              name="NOTIFICATIONS"
            />
          </div>
        </div>
      </div>

      <div className={style["menu-container"]}>
        <div className={style["menu-items"]}>
          {/* Search Was Here */}
          <div className={style.searchBtn}>
            <Link button to={exploreRoute}>
              <IconButton color="grey" size="big">
                <MagnifyingGlass />
              </IconButton>
            </Link>
          </div>
          <Popup
            anchor={{ v: "bottom", h: "right" }}
            transform={{ v: "top", h: "right" }}
            className={style.new}
          >
            <PopupTrigger>
              <Avatar setSize="1.75rem" src={avatarURL} />
            </PopupTrigger>
            <PopupContent render={PopupMenu} className={style["avatar-popup"]}>
              <Link button to={profileRoute(username)}>
                <MenuItem>
                  <Signature>
                    <Avatar setSize="2.75rem" src={avatarURL} />
                    <div>
                      <Type>{name}</Type>
                      <Type color="grey" underline>
                        View your profile
                      </Type>
                    </div>
                  </Signature>
                </MenuItem>
              </Link>
              <Divider />
              <Link button to={feedbackRoute}>
                <MenuItem>
                  <Signature>
                    <Type color="grey">
                      <ChatExclamation />
                    </Type>
                    <div>
                      <Type body2>Send us feedback</Type>
                      <Type color="grey" setSize="0.7rem">
                        Help us improve your experience
                      </Type>
                    </div>
                  </Signature>
                </MenuItem>
              </Link>

              {!isLicensed && (
                <Link button to="/pro">
                  <MenuItem>
                    <Signature>
                      <Type>🚀</Type>
                      <div>
                        <Type body2>Upgrade your membership</Type>
                        <Type color="grey" setSize="0.7rem">
                          Get more out of Lumastic
                        </Type>
                      </div>
                    </Signature>
                  </MenuItem>
                </Link>
              )}
              <Link button to={sendInviteRoute}>
                <MenuItem>
                  <Signature>
                    <Type color="grey">
                      <PaperAirplane />
                    </Type>
                    <div>
                      <Type body2>Send an invite</Type>
                      <Type color="grey" setSize="0.7rem">
                        Invite a friend to join Lumastic
                      </Type>
                    </div>
                  </Signature>
                </MenuItem>
              </Link>
              <Divider />
              <Link button to={settingsRoute()}>
                <MenuItem>
                  <Signature>
                    <Type color="grey">
                      <Gear />
                    </Type>
                    <div>
                      <Type body2>Settings</Type>
                    </div>
                  </Signature>
                </MenuItem>
              </Link>
              <Link button to={logoutRoute}>
                <MenuItem>
                  <Signature>
                    <Type color="grey">
                      <LogOut />
                    </Type>
                    <div>
                      <Type body2>Sign Out</Type>
                    </div>
                  </Signature>
                </MenuItem>
              </Link>
            </PopupContent>
          </Popup>
        </div>
      </div>
    </header>
  );
};

AppBar.propTypes = {
  className: PropTypes.string
};

export { AppBar };
