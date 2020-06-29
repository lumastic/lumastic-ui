import React from "react";
import PropTypes from "prop-types";
import style from "./CommentForm.scss";
import classNames from "../../helpers/classNames";

const CommentForm = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.commentform)} data-testid={"commentform"} {...rest}>
    {children}
  </div>
);

CommentForm.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { CommentForm };
