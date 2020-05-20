import React from "react";
import PropTypes from "prop-types";
import { List } from "../../components/List";
import { Label } from "../../components/Label";
import style from "./LabeledList.scss";
import classNames from "../../helpers/classNames";

const LabeledList = ({ children, className, label, right }) => (
  <>
    <Label right={right} className={classNames(className, style.label)}>
      {label}
    </Label>
    <List className={className}>{children}</List>
  </>
);

LabeledList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  right: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  label: PropTypes.string
};

export { LabeledList };
