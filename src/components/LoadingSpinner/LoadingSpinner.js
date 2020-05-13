import React from "react";
import PropTypes from "prop-types";
import style from "./LoadingSpinner.scss";
import classNames from "../../helpers/classNames";

const LoadingSpinner = ({ className }) => (
  <div
    className={classNames(className, style.loadingspinner)}
    data-testid="loadingspinner"
  />
);

LoadingSpinner.propTypes = {
  className: PropTypes.string
};

export { LoadingSpinner };
