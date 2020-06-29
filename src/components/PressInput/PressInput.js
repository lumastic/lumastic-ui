import { Press, PressProvider, defaultPressValue } from "pressdk";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import classNames from "../../helpers/classNames";
import { useInputContext } from "../../helpers/useInputContext";
import { pressComponents, PressMenu } from "../../PressHelpers";
import { Type } from "../Type";
import style from "./PressInput.scss";

const PressInput = ({
  defaultValue,
  placeholder,
  name = "pressinput",
  reset,
  readOnly,
  className
}) => {
  const { register, setValue, errors } = useInputContext();
  // console.log(defaultValue);
  useEffect(() => {
    if (register) register({ name });
  }, [register, name]);

  useEffect(() => {
    if (setValue)
      setValue(name, JSON.stringify(defaultValue || defaultPressValue()));
  }, []);

  const onChange = value => {
    if (setValue) setValue(name, JSON.stringify(value));
  };
  return (
    <>
      {errors && errors[name] && (
        <Type caption color="red">
          {errors[name]?.message}
        </Type>
      )}
      <div
        className={classNames(className, style.pressinput)}
        data-testid="pressinput"
      >
        <PressProvider initialValue={defaultValue} reset={reset}>
          <Type tag="div">
            <Press
              placeholder={placeholder || "Start writing..."}
              onChange={onChange}
              renderMenu={PressMenu}
              readOnly={readOnly}
              components={pressComponents}
            />
          </Type>
        </PressProvider>
      </div>
    </>
  );
};

PressInput.propTypes = {
  defaultValue: PropTypes.array,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  reset: PropTypes.bool,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string
};

export { PressInput };
