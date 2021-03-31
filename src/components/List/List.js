import React from "react";
import PropTypes from "prop-types";
import style from "./List.scss";
import classNames from "../../helpers/classNames";
import { Label } from "../Label";

const List = ({
  children,
  className,
  label,
  action,
  horizontal = false,
  ...rest
}) => (
  <div
    className={classNames(className, style.listContainer)}
    data-testid="list"
    {...rest}
  >
    {(label || action) && (
      <div className={classNames(className, style.topbar)}>
        <Label className={classNames(className, style.label)}>{label}</Label>
        <div className={classNames(className, style.action)}>{action}</div>
      </div>
    )}
    <div
      className={classNames(className, style.list, {
        [style.horizontal]: horizontal
      })}
    >
      {children}
    </div>
  </div>
);

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  horizontal: PropTypes.bool,
  label: PropTypes.string,
  action: PropTypes.node
};

export { List };
