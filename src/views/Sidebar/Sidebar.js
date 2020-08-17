import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import {
  Label,
  Link,
  MenuItem,
  NavButton,
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
  Logo,
  LogoText,
  MagnifyingGlass,
  Plus,
  PostPlus,
  SparkPlus
} from "../../icons";
import {
  createPostRoute,
  createSparkRoute,
  exploreRoute,
  homeRoute,
  notificationsRoute,
  createOrganizationRoute
} from "../../routes";
import { Signature, SparksNav, OrgSelect } from "../../templates";
import style from "./Sidebar.scss";

const Sidebar = ({ className, version, sparks = [], organizations = [] }) => {
  const [org, setOrg] = useState("all");
  const [sparkList, setSparks] = useState(sparks);
  useEffect(() => {
    if (org === "all") {
      setSparks(sparks);
    } else {
      setSparks(sparks.filter(spark => spark?.belongsTo?.id === org));
    }
  }, [org, sparks]);
  const onOrgChange = orgId => {
    setOrg(orgId);
  };
  return (
    <nav className={classNames(className, style.sidebar)} data-testid="sidebar">
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
      <div className={style.sparks}>
        <OrgSelect
          organizations={organizations}
          asFilter
          small
          defaultValue="all"
          onChange={onOrgChange}
          addOption={
            <Link button to={createOrganizationRoute}>
              <MenuItem>
                <Signature>
                  <Type>
                    <Plus />
                  </Type>
                  <Type>New Organization</Type>
                </Signature>
              </MenuItem>
            </Link>
          }
        />

        <div className={style.sparksnav}>
          <SparksNav sparks={sparkList} />
        </div>
      </div>
      <NavButton
        to={createSparkRoute}
        exact
        path={createSparkRoute.pathname}
        className={style.newbtn}
      >
        <Type body2 tag="div" color="primary" className={style.type}>
          <Plus /> <b>NEW SPARK</b>
        </Type>
      </NavButton>
    </nav>
  );
};

Sidebar.propTypes = {
  version: PropTypes.string,
  className: PropTypes.string,
  sparks: PropTypes.array,
  organizations: PropTypes.array
};

export { Sidebar };
