import React from "react";
import PropTypes from "prop-types";
import style from "./Button.css";

const Button = ({ children }) => (
  <button type="button" className={style.button}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.element
};

export { Button };
