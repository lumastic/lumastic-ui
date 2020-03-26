import React, { Children } from "react";
import PropTypes from "prop-types";
import style from "./Breadcrumbs.scss";
import classNames from "../../helpers/classNames";
import { Slash } from "../../components/Slash";

const Breadcrumbs = ({ children, className, ...rest }) => {
  const childCount = Children.count(children);

  return (
    <div
      className={classNames(className, style.breadcrumbs)}
      data-testid="breadcrumbs"
      {...rest}
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
