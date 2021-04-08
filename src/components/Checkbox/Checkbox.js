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
    const { register } = useInputContext();
    const [checked, setCheck] = useState(defaultCheck);

    useEffect(() => {
      if (onChange) {
        onChange(checked);
      }
    }, [checked]);

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
        <input
          id={id}
          checked={checked}
          value={checked}
          disabled={disabled}
          name={name}
          type="checkbox"
          ref={register}
          onChange={e => {
            setCheck(e.target.checked);
          }}
          hidden
        />
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
