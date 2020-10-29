import React, { useContext } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { TabContext } from "./TabContext";
import { classNames } from "../../../helpers";
import { Type } from "../../Type";
import style from "./Tab.scss";

const Tab = ({ children, name, className, disabled }) => {
  const { initialTab, path, asNav } = useContext(TabContext);

  return (
    <NavLink
      to={!disabled && (initialTab === name ? path : `${path}/${name}`)}
      exact
      className={classNames(
        className,
        style.tab,
        {
          [style.disabled]: disabled
        },
        {
          [style.navbutton]: asNav
        }
      )}
      activeClassName={style.active}
    >
      <Type body2 headerFont>
        {children}
      </Type>
    </NavLink>
  );
};

Tab.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool
};

export { Tab };
