import React, { Children } from "react";
import PropTypes from "prop-types";
import { Slash } from "../../icons/Slash";
import style from "./Breadcrumbs.scss";
import classNames from "../../helpers/classNames";

const Breadcrumbs = ({ children, className }) => {
  const childCount = Children.count(children);

  return (
    <div
      className={classNames(className, style.breadcrumbs)}
      data-testid="breadcrumbs"
    >
      {Children.map(children, (child, index) => (
        <>
          {child}
          {index !== childCount - 1 ? <Slash /> : null}
        </>
      ))}
    </div>
  );
};

Breadcrumbs.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { Breadcrumbs };
