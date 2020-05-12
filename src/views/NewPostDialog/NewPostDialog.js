import React from "react";
import PropTypes from "prop-types";
import style from "./NewPostDialog.scss";
import classNames from "../../helpers/classNames";

const NewPostDialog = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.newpostdialog)} data-testid={"newpostdialog"} {...rest}>
    {children}
  </div>
);

NewPostDialog.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { NewPostDialog };
