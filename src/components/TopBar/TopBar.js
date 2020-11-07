import PropTypes from "prop-types";
import React from "react";
import { useLocation } from "react-router-dom";
import classNames from "../../helpers/classNames";
import { Link } from "../Link";
import { Logo } from "../Logo";
import style from "./TopBar.scss";

const TopBarLink = ({ children, to = "" }) => {
  const location = useLocation();
  return (
    <a href={`${location.pathname}#${to}`} className={style.link}>
      {children}
    </a>
  );
};

TopBarLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string
};

const TopBar = ({ children, className, test }) => (
  <nav
    className={classNames(className, style.topbar, { [style.test]: test })}
    data-testid="topbar"
  >
    <Link to="/" button inline>
      <Logo />
    </Link>

    <div className={style.items}>{children}</div>
  </nav>
);

TopBar.propTypes = {
  children: PropTypes.node,
  test: PropTypes.bool,
  className: PropTypes.string
};

export { TopBar, TopBarLink };
