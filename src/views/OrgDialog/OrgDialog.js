import React from "react";
import PropTypes from "prop-types";
import style from "./OrgDialog.scss";
import classNames from "../../helpers/classNames";

const OrgDialog = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.orgdialog)} data-testid={"orgdialog"} {...rest}>
    {children}
  </div>
);

OrgDialog.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { OrgDialog };
