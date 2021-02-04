import React from "react";
import PropTypes from "prop-types";
import style from "./AppLayout.scss";
import classNames from "../../helpers/classNames";
import { AppBar } from "../../components";
import { MobileNav } from "../../views";

const AppLayout = ({ children, className, withSidebar }) => (
  <div
    className={classNames(className, style.applayout, {
      [style["sidebar-layout"]]: withSidebar
    })}
    data-testid="applayout"
  >
    <AppBar />
    <MobileNav />
    {children}
  </div>
);

AppLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  withSidebar: PropTypes.bool
};

export { AppLayout };
