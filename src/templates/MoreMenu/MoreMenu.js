import React from "react";
import PropTypes from "prop-types";
import style from "./MoreMenu.scss";
import classNames from "../../helpers/classNames";

const MoreMenu = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.moremenu)} data-testid={"moremenu"} {...rest}>
    {children}
  </div>
);

MoreMenu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { MoreMenu };
