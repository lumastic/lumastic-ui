import PropTypes from "prop-types";
import React from "react";
import { classNames } from "../../../helpers";
import style from "./TabPanel.scss";

const TabPanel = ({ children, className }) => (
  <div className={classNames(style["tab-panel"], className)}>{children}</div>
);

TabPanel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { TabPanel };
