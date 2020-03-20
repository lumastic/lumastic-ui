import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import style from "./Alert.scss";
import classNames from "../../helpers/classNames";

const Alert = forwardRef(({ children, className, ...rest }, ref) => (
  <div
    className={classNames(className, style.alert)}
    data-testid="alert"
    ref={ref}
    {...rest}
  >
    {children}
  </div>
));

Alert.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { Alert };
