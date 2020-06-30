import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { classNames } from "../../../helpers";
import { TabContext } from "../Tab/TabContext";
import style from "./TabPanel.scss";

const TabPanel = ({ name, children, className }) => {
  const { initialTab, path } = useContext(TabContext);

  const TabPanelComp = () => (
    <div className={classNames(style["tab-panel"], className)}>{children}</div>
  );
  return (
    <Route
      path={initialTab === name ? path : `${path}/${name}`}
      exact={initialTab === name}
      component={TabPanelComp}
    />
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  className: PropTypes.string
};

export { TabPanel };
