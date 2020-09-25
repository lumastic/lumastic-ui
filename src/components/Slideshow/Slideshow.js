import React, { Children } from "react";
import PropTypes from "prop-types";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import * as queryString from "query-string";
import style from "./Slideshow.scss";
import classNames from "../../helpers/classNames";

const Slideshow = ({ children, className, name }) => {
  const slides = Children.toArray(children);
  const location = useLocation();
  return (
    <>
      {slides[queryString.parse(location.search)[name] || 0]}
      <div className={style["slide-controller"]}>
        {slides.map((slide, index) => (
          <Link
            to={{
              pathname: location.pathname,
              hash: location.hash,
              search: queryString.stringify({
                ...queryString.parse(location.search),
                [name]: index
              })
            }}
          >
            <div className={style.dot} />
            dot
          </Link>
        ))}
      </div>
    </>
  );
};

Slideshow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string
};

export { Slideshow };
