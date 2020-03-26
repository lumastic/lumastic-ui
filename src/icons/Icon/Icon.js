import React from "react";
import PropTypes from "prop-types";
import style from "./Icon.scss";

const Icon = ({ icon }) => (
  <svg viewBox={icon.viewBox} className={style.icon}>
    <use xlinkHref={`#${icon.id}`} />
  </svg>
);

Icon.propTypes = {
  icon: PropTypes.object
};

export { Icon };
