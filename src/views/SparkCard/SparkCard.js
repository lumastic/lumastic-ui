import React from "react";
import PropTypes from "prop-types";
import style from "./SparkCard.scss";
import classNames from "../../helpers/classNames";

const SparkCard = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.sparkcard)} data-testid={"sparkcard"} {...rest}>
    {children}
  </div>
);

SparkCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { SparkCard };
