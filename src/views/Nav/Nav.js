import React from "react";
import PropTypes from "prop-types";
import { MobileNav } from "../MobileNav";
import { Sidebar } from "../Sidebar";
import style from "./Nav.scss";
import classNames from "../../helpers/classNames";

const Nav = ({ sparks = [], version = "" }) => (
  <>
    <MobileNav className={style.mobile} />
    <Sidebar className={style.sidebar} sparks={sparks} version={version} />
  </>
);

Nav.propTypes = {
  sparks: PropTypes.array,
  version: PropTypes.string
};

export { Nav };