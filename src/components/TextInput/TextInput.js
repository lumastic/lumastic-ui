import React from "react";
import PropTypes from "prop-types";
import style from "./TextInput.scss";
import classNames from "../../helpers/classNames";

const TextInput = ({ name, value, id, placeholder, className, ...rest }) => (
  <input
    type="text"
    name={name}
    value={value}
    id={id}
    placeholder={name || placeholder}
    className={classNames(className, style.textinput, "type")}
    data-testid="textinput"
    {...rest}
  />
);

TextInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export { TextInput };
