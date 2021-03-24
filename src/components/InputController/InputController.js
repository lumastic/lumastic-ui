import PropTypes from "prop-types";
import React from "react";
import { Controller } from "react-hook-form";
import { useInputContext } from "../../hooks";

const InputController = ({ as, ...rest }) => {
  const { control } = useInputContext();
  return <Controller as={as} control={control && control} {...rest} />;
};

InputController.propTypes = {
  as: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
};

export { InputController };
