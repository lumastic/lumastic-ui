import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./Checkbox.scss";
import classNames from "../../helpers/classNames";
import { useInputContext } from "../../hooks";
import { Checkmark } from "../../icons";

const Checkbox = React.memo(
  ({
    checked: defaultCheck = false,
    id,
    name,
    className,
    onChange,
    disabled
  }) => {
    const { register, setValue, errors } = useInputContext();
    const [checked, setCheck] = useState(defaultCheck);

    useEffect(() => {
      if (register) register({ name });
    }, [register, name]);

    useEffect(() => {
      setCheck(defaultCheck);
    }, [defaultCheck]);

    useEffect(() => {
      if (setValue && !disabled) setValue(name, checked, true);
      if (onChange && !disabled) onChange(checked);
    }, [checked, setValue, name, onChange, disabled]);

    return (
      <div
        className={classNames(className, style["checkbox-container"])}
        data-testid="checkbox"
      >
        <button
          className={classNames(style.checkbox, { [style.checked]: checked })}
          type="button"
          onClick={() => {
            setCheck(old => !old);
          }}
          disabled={disabled}
        >
          <div className={style.mark}>
            <Checkmark />
          </div>
        </button>
        <input id={id} checked={checked} name={name} type="checkbox" hidden />
      </div>
    );
  }
);

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func
};

export { Checkbox };
