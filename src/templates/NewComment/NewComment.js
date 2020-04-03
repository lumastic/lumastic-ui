import React from "react";
import PropTypes from "prop-types";
import style from "./NewComment.scss";
import classNames from "../../helpers/classNames";

const NewComment = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.newcomment)} data-testid={"newcomment"} {...rest}>
    {children}
  </div>
);

NewComment.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { NewComment };
