import PropTypes from "prop-types";
import React, { Children, cloneElement } from "react";
import { Route, Switch } from "react-router-dom";
import { classNames } from "../../helpers";
import { TabContext } from "./Tab/TabContext";
import { TabPanel } from "./TabPanel";
import style from "./Tabs.scss";

const Tabs = ({ children, className, asNav, initialTab, baseRoute }) => {
  const tabProviderValue = {
    asNav,
    path: baseRoute,
    initialTab
  };
  const childArray = Children.toArray(children);
  const header = cloneElement(childArray[0], { asNav });
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
  asNav: PropTypes.bool,
  baseRoute: PropTypes.string
};

export { Tabs };
