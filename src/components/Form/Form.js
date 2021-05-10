/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import PropTypes from "prop-types";
import React, { useState } from "react";
import { FormContext, useForm } from "react-hook-form";
import { Type } from "../Type";
import { Alert } from "../Alert";
import style from "./Form.scss";

const defaultSubmit = (data, e, rest) => {
  alert(JSON.stringify(data));
  rest.reset();
};

const Form = ({
  defaultValues,
  validationSchema,
  children,
  className,
  onSubmit = defaultSubmit,
  debug
}) => {
  const methods = useForm({
    defaultValues,
    validationSchema
  });
  const [values, setValues] = useState(methods.getValues());
  const submitHandler = (data, e) => onSubmit(data, e, { ...methods });
  return (
    <FormContext {...methods}>
      {!methods.errors.general || (
        <Alert severity="error" className={style.general}>
          <Type body2>{methods.errors.general?.message}</Type>
        </Alert>
      )}
      <form
        className={className || style.form}
        onSubmit={methods.handleSubmit(submitHandler)}
        onKeyDown={e => {
          if (e.metaKey && e.key === "Enter") {
            methods.handleSubmit(submitHandler)(e);
          }
        }}
      >
        {children}
      </form>

      {debug ? (
        <div className={style.debugger}>
          <pre onClick={() => setValues(methods.getValues())}>
            DEBUGGER: Click to Refresh
            <br />
            {JSON.stringify(values, null, 2) || null}
          </pre>
        </div>
      ) : null}
    </FormContext>
  );
};

Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  defaultValues: PropTypes.object,
  validationSchema: PropTypes.object,
  onSubmit: PropTypes.func,
  debug: PropTypes.bool
};

export { Form };
