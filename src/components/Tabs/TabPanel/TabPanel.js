import PropTypes from "prop-types";
import React, { cloneElement, Children } from "react";

const TabPanel = ({ children, ...rest }) => {
  const child = Children.map(children, c =>
    cloneElement(c, {
      ...rest
    })
  );
  return <>{child}</>;
};

TabPanel.propTypes = {
  children: PropTypes.node
};

export { TabPanel };
