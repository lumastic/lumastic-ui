import React from "react";
import PropTypes from "prop-types";
import { classNames } from "../../../helpers";
import style from "./TabHeader.scss";

const TabHeader = ({ children, className, align = "left" }) => (
  <div className={classNames(style["tab-header"], className, style[align])}>
    {children}
  </div>
);

TabHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  align: PropTypes.oneOf(["left", "right", "center"])
};

export { TabHeader };
