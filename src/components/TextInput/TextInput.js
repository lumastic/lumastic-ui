import React from "react";
import PropTypes from "prop-types";
import { useInputContext } from "../../hooks";
import { Type } from "..";
import style from "./TextInput.scss";
import classNames from "../../helpers/classNames";

const TextInput = ({ name, type, placeholder, className, ...rest }) => {
  const { register, errors } = useInputContext();
  return (
    <>
      {errors && errors[name] && (
        <Type caption color="red">
          {errors[name]?.message}
        </Type>
      )}

      <input
        type={type || "text"}
        name={name}
        placeholder={placeholder || name}
        className={classNames(className, style.textinput, {
          [style.error]: errors && errors[name]
        })}
        data-testid="textinput"
        spellCheck
        autoComplete="on"
        ref={register || null}
        {...rest}
      />
    </>
  );
};

TextInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string
};

export { TextInput };
