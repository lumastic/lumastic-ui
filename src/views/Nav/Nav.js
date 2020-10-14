import PropTypes from "prop-types";
import React from "react";
import { MobileNav } from "../MobileNav";
import { Sidebar } from "../Sidebar";
import style from "./Nav.scss";

const Nav = ({ sparks, version = "", organizations }) => (
  <>
    <MobileNav className={style.mobile} />
    <Sidebar
      className={style.sidebar}
      sparks={sparks}
      version={version}
      organizations={organizations}
    />
  </>
);

Nav.propTypes = {
  sparks: PropTypes.array,
  organizations: PropTypes.array,
  version: PropTypes.string
};

export { Nav };
