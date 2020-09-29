import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import style from "./Card.scss";
import classNames from "../../helpers/classNames";

const Card = forwardRef(
  ({ children, className, noSidePadding = false, ...rest }, ref) => (
    <div
      className={classNames(className, style.card, {
        [style["no-side-padding"]]: noSidePadding
      })}
      data-testid="card"
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);

Card.propTypes = {
  children: PropTypes.node,
  noSidePadding: PropTypes.bool,
  backgroundImage: PropTypes.string,
  className: PropTypes.string
};

export { Card };
