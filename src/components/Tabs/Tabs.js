import React, { useState } from "react";
import PropTypes from "prop-types";
import { Switch, useLocation } from "react-router-dom";
import { TabContext } from "./Tab/TabContext";
import style from "./Tabs.scss";
import classNames from "../../helpers/classNames";

const Tabs = ({ children, className, initialTab, baseRoute }) => {
  const [activeTab, changeTab] = useState(initialTab);
  const tabProviderValue = {
    activeTab,
    changeTab,
    path: baseRoute,
    initialTab
  };

  return (
    <TabContext.Provider value={tabProviderValue}>
      <Switch>
        <div className={classNames(style.tabs, className)}>{children}</div>
      </Switch>
    </TabContext.Provider>
  );
};

Tabs.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  initialTab: PropTypes.string,
  baseRoute: PropTypes.string
};

export { Tabs };
