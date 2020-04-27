import React from "react";
import PropTypes from "prop-types";
import style from "./PostForm.scss";
import classNames from "../../helpers/classNames";

const PostForm = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.postform)} data-testid={"postform"} {...rest}>
    {children}
  </div>
);

PostForm.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { PostForm };
