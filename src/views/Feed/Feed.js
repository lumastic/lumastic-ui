import PropTypes from "prop-types";
import React from "react";
import classNames from "../../helpers/classNames";
import style from "./Feed.scss";

const Feed = ({ children, className, ...rest }) => (
  <div
    className={classNames(className, style.feed)}
    data-testid="feed"
    {...rest}
  >
    {children}
  </div>
);

Feed.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { Feed };
