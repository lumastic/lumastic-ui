import React from "react";
import PropTypes from "prop-types";
import style from "./Icon.scss";
import classNames from "../../helpers/classNames";

const Icon = ({ icon, className }) => (
  <svg viewBox={icon.viewBox} className={classNames(className, style.icon)}>
    <use xlinkHref={`#${icon.id}`} />
  </svg>
);

Icon.propTypes = {
  icon: PropTypes.object,
  className: PropTypes.string
};

export { Icon };
