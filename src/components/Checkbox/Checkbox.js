import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./Checkbox.scss";
import classNames from "../../helpers/classNames";
import { useInputContext } from "../../helpers/useInputContext";
import { Checkmark } from "../../icons";

const Checkbox = ({
  checked: defaultCheck = false,
  id,
  name,
  className,
  ...rest
}) => {
  const { register, setValue, errors } = useInputContext();
  const [checked, setCheck] = useState(defaultCheck);

  useEffect(() => {
    if (register) register({ name });
  }, [register, name]);

  useEffect(() => {
    if (setValue) {
      setValue(name, checked, true);
    }
  }, [checked, setValue, name]);

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
      >
        <div className={style.mark}>
          <Checkmark />
        </div>
      </button>
      <input id={id} checked={checked} name={name} type="checkbox" hidden />
    </div>
  );
};

Checkbox.propTypes = {
  children: PropTypes.node,
  checked: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string
};

export { Checkbox };
