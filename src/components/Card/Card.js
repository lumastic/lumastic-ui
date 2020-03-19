import React from "react";
import PropTypes from "prop-types";
import style from "./Card.scss";
import classNames from "../../helpers/classNames";

const Card = ({ children, className, noSidePadding = false, ...rest }) => (
  <div
    className={classNames(className, style.card, {
      [style["no-side-padding"]]: noSidePadding
    })}
    data-testid="card"
    {...rest}
  >
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node,
  noSidePadding: PropTypes.bool,
  className: PropTypes.string
};

export { Card };
