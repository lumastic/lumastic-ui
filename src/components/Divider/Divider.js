import React from "react";
import PropTypes from "prop-types";
import style from "./Divider.scss";
import classNames from "../../helpers/classNames";

const Divider = ({ className }) => (
  <hr className={classNames(className, style.divider)} data-testid="divider" />
);

Divider.propTypes = {
  className: PropTypes.string
};

export { Divider };
