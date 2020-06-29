import React, { useEffect } from "react";
import { PressProvider, Press } from "pressdk";
import PropTypes from "prop-types";
import { PressMenu } from "../../PressHelpers";
import { useInputContext } from "../../helpers/useInputContext";
import { Type } from "../Type";
import style from "./PressInput.scss";
import classNames from "../../helpers/classNames";

const PressInput = ({
  defaultValue,
  placeholder,
  name = "pressinput",
  readOnly,
  className
}) => {
  const { register, setValue, errors } = useInputContext();
  useEffect(() => {
    if (register) register({ name });
  }, [register, name]);

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
        <PressProvider initialValue={defaultValue}>
          <Press
            placeholder={placeholder || "Start writing..."}
            onChange={onChange}
            renderMenu={PressMenu}
            readOnly={readOnly}
          />
        </PressProvider>
      </div>
    </>
  );
};

PressInput.propTypes = {
  defaultValue: PropTypes.array,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  readOnly: PropTypes.bool,
  className: PropTypes.string
};

export { PressInput };
