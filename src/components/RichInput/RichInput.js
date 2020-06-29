import React, { useEffect } from "react";
import { TextEditor } from "pressdk";
import PropTypes from "prop-types";
import { useInputContext } from "../../helpers/useInputContext";
import { Type } from "../Type";
import style from "./RichInput.scss";
import classNames from "../../helpers/classNames";

const RichInput = ({
  defaultValue,
  placeholder,
  name = "richtext",
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
        className={classNames(className, style.richinput)}
        data-testid="richinput"
      >
        <Type tag="div">
          <TextEditor
            initialValue={defaultValue}
            placeholder={placeholder || "Start writing..."}
            onChange={onChange}
          />
        </Type>
      </div>
    </>
  );
};

RichInput.propTypes = {
  defaultValue: PropTypes.array,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string
};

export { RichInput };
