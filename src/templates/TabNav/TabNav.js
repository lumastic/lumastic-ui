import React from "react";
import PropTypes from "prop-types";
import { Tabs } from "../../components/Tabs";
import style from "./TabNav.scss";
import classNames from "../../helpers/classNames";

const TabNav = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.tabnav)} data-testid="tabnav">
    <Tabs className={style.header} asNav {...rest}>
      {children}
    </Tabs>
  </div>
);

TabNav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { TabNav };
