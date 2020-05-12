import React from "react";
import PropTypes from "prop-types";
import style from "./NewPostCard.scss";
import classNames from "../../helpers/classNames";

const NewPostCard = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.newpostcard)} data-testid={"newpostcard"} {...rest}>
    {children}
  </div>
);

NewPostCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { NewPostCard };
