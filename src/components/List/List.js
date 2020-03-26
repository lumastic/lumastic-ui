import React from "react";
import PropTypes from "prop-types";
import style from "./List.scss";
import classNames from "../../helpers/classNames";

const List = ({ children, className }) => (
  <div className={classNames(className, style.list)} data-testid="list">
    {children}
  </div>
);

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { List };
