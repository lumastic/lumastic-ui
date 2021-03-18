import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import PropTypes from "prop-types";
import { useInputContext } from "../../hooks";
import { Type } from "..";
import style from "./TextArea.scss";
import classNames from "../../helpers/classNames";

const TextArea = ({ name, placeholder, className, ...rest }) => {
  const { register, errors } = useInputContext();
  return (
    <>
      {errors && errors[name] && (
        <Type caption color="red">
          {errors[name]?.message}
        </Type>
      )}

      <TextareaAutosize
        name={name}
        placeholder={placeholder || name}
        className={classNames(className, style.textarea, {
          [style.error]: errors && errors[name]
        })}
        data-testid="textarea"
        spellCheck
        ref={register || null}
        {...rest}
      />
    </>
  );
};

TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string
};

export { TextArea };
