import React from "react";
import PropTypes from "prop-types";
import style from "./Search.scss";
import classNames from "../../helpers/classNames";

const Search = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.search)} data-testid={"search"} {...rest}>
    {children}
  </div>
);

Search.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { Search };
