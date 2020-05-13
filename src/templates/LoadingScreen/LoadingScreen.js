import React from "react";
import PropTypes from "prop-types";
import style from "./LoadingScreen.scss";
import classNames from "../../helpers/classNames";
import { LoadingSpinner } from "../../components";

const LoadingScreen = ({ className }) => (
  <div
    className={classNames(className, style.loadingscreen)}
    data-testid="loadingscreen"
  >
    <LoadingSpinner />
  </div>
);

LoadingScreen.propTypes = {
  className: PropTypes.string
};

export { LoadingScreen };
