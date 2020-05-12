import React from "react";
import PropTypes from "prop-types";
import style from "./NewSparkDialog.scss";
import classNames from "../../helpers/classNames";

const NewSparkDialog = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.newsparkdialog)} data-testid={"newsparkdialog"} {...rest}>
    {children}
  </div>
);

NewSparkDialog.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { NewSparkDialog };
