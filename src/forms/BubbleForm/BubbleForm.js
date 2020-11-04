import React from "react";
import PropTypes from "prop-types";
import style from "./BubbleForm.scss";
import classNames from "../../helpers/classNames";

const BubbleForm = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.bubbleform)} data-testid={"bubbleform"} {...rest}>
    {children}
  </div>
);

BubbleForm.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { BubbleForm };
