import React from "react";
import PropTypes from "prop-types";
import { List } from "../../components/List";
import { Label } from "../../components/Label";
// import style from "./LabeledList.scss";

const LabeledList = ({ children, className, label, right }) => (
  <>
    <Label right={right}>{label}</Label>
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
