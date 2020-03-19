import React from "react";
import PropTypes from "prop-types";
import style from "./RadioInput.scss";
import classNames from "../../helpers/classNames";

const RadioInput = ({
  children,
  className,
  id,
  name,
  disabled,
  isChecked,
  value,
  ...rest
}) => (
  <div
    className={classNames(className, style.radioinput)}
    data-testid="radioinput"
  >
    <input
      type="radio"
      value={value}
      id={id}
      name={name}
      disabled={disabled}
      checked={isChecked}
      {...rest}
    />
    <div className={classNames(style.label, "type")}>{children}</div>
  </div>
);

RadioInput.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  value: PropTypes.string
};

export { RadioInput };
