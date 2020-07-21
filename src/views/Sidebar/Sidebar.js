import PropTypes from "prop-types";
import React from "react";
import { Divider, NavButton, Link, Type, Label } from "../../components";
import classNames from "../../helpers/classNames";
import { Bell, Compass, Home, MagnifyingGlass, Plus, Trash } from "../../icons";
import { SparksNav } from "../../templates";
import style from "./Sidebar.scss";

const Sidebar = ({ className, version, sparks = [] }) => (
  <nav className={classNames(className, style.sidebar)} data-testid="sidebar">
    <div className={style["main-btns"]}>
      <NavButton to="/" exact>
        <Type tag="div" h4 className={style.type}>
          <Home /> Home
        </Type>
      </NavButton>
      <NavButton>
        <Type tag="div" h4 className={style.type}>
          <Compass /> Explore
        </Type>
      </NavButton>
      <NavButton>
        <Type tag="div" h4 className={style.type}>
          <MagnifyingGlass /> Find
        </Type>
      </NavButton>
      <NavButton>
        <Type tag="div" h4 className={style.type}>
          <Plus /> Create
        </Type>
      </NavButton>
      <NavButton>
        <Type tag="div" h4 className={style.type}>
          <Bell /> Notifications
        </Type>
      </NavButton>
    </div>

    <div className={style.divider}>
      <Divider />
    </div>

    <div className={style.sparks}>
      <Label className={style.label}>MY SPARKS</Label>
      <SparksNav sparks={sparks} />
      <NavButton>
        <Type body2 tag="div" color="primary" className={style.type}>
          <Plus /> <b>NEW SPARK</b>
        </Type>
      </NavButton>
    </div>

    <div className={style.divider}>
      <Divider />
    </div>

    <div className={style["bottom-btns"]}>
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
    </div>

    <div className={style["bottom-links"]}>
      <Link>
        <Type caption color="grey">
          Terms and Guidelines
        </Type>
      </Link>
      <Link>
        <Type caption color="grey">
          v{version}
        </Type>
      </Link>
    </div>
  </nav>
);

Sidebar.propTypes = {
  version: PropTypes.string,
  className: PropTypes.string,
  sparks: PropTypes.array
};

export { Sidebar };
