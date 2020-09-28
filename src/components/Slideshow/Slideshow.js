import PropTypes from "prop-types";
import * as queryString from "query-string";
import React, { Children, cloneElement } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "../../helpers/classNames";
import style from "./Slideshow.scss";

const Slideshow = ({ children, className, name = "slideshow" }) => {
  const slides = Children.toArray(children);
  const location = useLocation();
  const isIndex = index =>
    parseInt(queryString.parse(location.search)[name]) === index ||
    (!queryString.parse(location.search)[name] && index === 0);
  return (
    <>
      {cloneElement(slides[queryString.parse(location.search)[name] || 0], {
        nextSlide: parseInt(queryString.parse(location.search)[name]) + 1 || 1,
        previousSlide:
          parseInt(queryString.parse(location.search)[name]) - 1 || 0
      })}
      <div className={classNames(className, style["slide-controller"])}>
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
            className={classNames(style.dot, {
              [style.active]: isIndex(index)
            })}
          />
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
