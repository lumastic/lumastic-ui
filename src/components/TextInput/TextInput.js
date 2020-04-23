import React from "react";
import PropTypes from "prop-types";
import style from "./TextInput.scss";
import classNames from "../../helpers/classNames";

const TextInput = ({
  name,
  placeholder,
  className,
  register,
  setValue,
  ...rest
}) => (
  <input
    type="text"
    name={name}
    placeholder={placeholder || name}
    className={classNames(className, style.textinput)}
    data-testid="textinput"
    spellCheck
    ref={register}
    {...rest}
  />
);

TextInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  setValue: PropTypes.func
};

export { TextInput };
