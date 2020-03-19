import React from "react";
import PropTypes from "prop-types";
import style from "./Slash.scss";
import classNames from "../../helpers/classNames";

const Slash = ({ className, color = "grey" }) => (
  <svg
    viewBox="0 0 20 32"
    className={classNames(className, style.slash)}
    data-testid="slash"
  >
    <line x1="4" y1="28" x2="16" y2="4" />
  </svg>
);

Slash.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(["grey"])
};

export { Slash };
