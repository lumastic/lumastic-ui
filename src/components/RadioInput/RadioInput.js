import React from "react";
import PropTypes from "prop-types";
import { useInputContext } from "../../hooks";
import style from "./RadioInput.scss";
import classNames from "../../helpers/classNames";

const RadioInput = ({
  children,
  className,
  id,
  name,
  disabled,
  value,
  ...rest
}) => {
  const { register } = useInputContext();
  return (
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
        ref={register}
        {...rest}
      />
      <div className={classNames(style.label, "type")}>{children}</div>
    </div>
  );
};
RadioInput.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  value: PropTypes.string,
  register: PropTypes.func
};

export { RadioInput };
