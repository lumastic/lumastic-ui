import React from "react";
import PropTypes from "prop-types";
import { MobileNav } from "../MobileNav";
import { Sidebar } from "../Sidebar";
import style from "./Nav.scss";
import classNames from "../../helpers/classNames";

const Nav = ({ sparks, version = "", organizations }) => (
  <>
    <MobileNav data-testid="nav" className={style.mobile} />
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
