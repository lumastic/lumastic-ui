import React from "react";
import PropTypes from "prop-types";
import { classNames } from "../../../helpers";
import style from "./TabHeader.scss";

const TabHeader = ({
  children,
  className,
  align = "left",
  vertical = false
}) => (
  <div
    className={classNames(style["tab-header"], className, style[align], {
      [style.vertical]: vertical
    })}
  >
    {children}
  </div>
);

TabHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  align: PropTypes.oneOf(["left", "right", "center"]),
  vertical: PropTypes.bool
};

export { TabHeader };
