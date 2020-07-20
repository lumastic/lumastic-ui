import PropTypes from "prop-types";
import React from "react";
import { Divider, NavButton, Link, Type } from "../../components";
import classNames from "../../helpers/classNames";
import { Bell, Compass, Home, MagnifyingGlass, Plus, Trash } from "../../icons";
import { SparksNav } from "../../templates";
import style from "./Sidebar.scss";

const Sidebar = ({ className, version, sparks = [] }) => (
  <nav className={classNames(className, style.sidebar)} data-testid="sidebar">
    <div className={style["main-btns"]}>
      <NavButton>
        <Home /> Home
      </NavButton>
      <NavButton>
        <Compass /> Explore
      </NavButton>
      <NavButton>
        <MagnifyingGlass /> Find
      </NavButton>
      <NavButton>
        <Plus /> Create
      </NavButton>
      <NavButton>
        <Bell /> Notifications
      </NavButton>
    </div>

    <div className={style.divider}>
      <Divider />
    </div>

    <div className={style.sparks}>
      <SparksNav sparks={sparks} />
      <NavButton>
        <Plus /> New Spark
      </NavButton>
    </div>

    <div className={style.divider}>
      <Divider />
    </div>

    <div className={style["bottom-btns"]}>
      <NavButton>
        <Trash /> Archive
      </NavButton>
      <NavButton>Store</NavButton>
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
