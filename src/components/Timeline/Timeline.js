import React from "react";
import PropTypes from "prop-types";
import style from "./Timeline.scss";
import classNames from "../../helpers/classNames";

const Timeline = ({ className }) => (
  <div
    className={classNames(className, style.timeline)}
    data-testid="timeline"
  />
);

Timeline.propTypes = {
  className: PropTypes.string
};

export { Timeline };
