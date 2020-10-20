import React from "react";
import PropTypes from "prop-types";
import style from "./LoadingSpinner.scss";
import classNames from "../../helpers/classNames";

const LoadingSpinner = ({ className, white, small }) => (
  <div
    className={classNames(
      className,
      style["loading-spinner"],
      {
        [style.white]: white
      },
      {
        [style.small]: small
      }
    )}
    data-testid="loadingspinner"
  />
);

LoadingSpinner.propTypes = {
  className: PropTypes.string,
  white: PropTypes.bool,
  small: PropTypes.bool
};

export { LoadingSpinner };
