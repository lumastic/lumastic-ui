import React from "react";
import style from "./Container.scss";
import classNames from "../../helpers/classNames";

/**
 * A component that contains the width of content on a page
 * @param {Object} props
 * @param {*} props.children Children of the container
 * @param {string} props.className Custom class you can add to the container
 * @param {string} props.maxWidth Changes the max-width of the container
 */
const Container = ({ children, className, maxWidth, ...rest }) => (
  <div
    className={classNames(className, style.container)}
    data-testid="container"
    style={{ maxWidth }}
    {...rest}
  >
    {children}
  </div>
);

export { Container };
