import React from "react";
import PropTypes from "prop-types";
import style from "./Feed.scss";
import classNames from "../../helpers/classNames";

const Feed = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.feed)} data-testid={"feed"} {...rest}>
    {children}
  </div>
);

Feed.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { Feed };
