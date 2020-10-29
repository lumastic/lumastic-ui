import PropTypes from "prop-types";
import React, { Children, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { TabContext } from "./Tab/TabContext";
import { TabPanel } from "./TabPanel";
import { classNames } from "../../helpers";
import style from "./Tabs.scss";

const Tabs = ({ children, className, initialTab, baseRoute }) => {
  const [activeTab, changeTab] = useState(initialTab);
  const tabProviderValue = {
    activeTab,
    changeTab,
    path: baseRoute,
    initialTab
  };
  const childArray = Children.toArray(children);
  const header = childArray[0];
  const panels = childArray.slice(1, childArray.length);
  return (
    <TabContext.Provider value={tabProviderValue}>
      <div className={classNames(style.tabs, className)}>{header}</div>

      <Switch>
        {panels.map(panel => (
          <Route
            key={panel?.props?.name}
            path={
              initialTab === panel?.props?.name
                ? baseRoute
                : `${baseRoute}/${panel?.props?.name}`
            }
            exact={initialTab === panel?.props?.name}
            render={() => <TabPanel {...panel?.props} />}
          />
        ))}
      </Switch>
    </TabContext.Provider>
  );
};

Tabs.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  initialTab: PropTypes.string,
  vertical: PropTypes.bool,
  baseRoute: PropTypes.string
};

export { Tabs };
