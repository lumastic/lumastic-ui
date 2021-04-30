import React from "react";
import PropTypes from "prop-types";
import style from "./Divider.scss";
import classNames from "../../helpers/classNames";

const Divider = ({ className, white = false }) => (
  <hr
    className={classNames(className, style.divider, { [style.white]: white })}
    data-testid="divider"
  />
);

Divider.propTypes = {
  className: PropTypes.string,
  white: PropTypes.bool
};

export { Divider };
