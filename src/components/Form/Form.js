import PropTypes from "prop-types";
import React, { useState } from "react";
import { FormContext, useForm } from "react-hook-form";
import { Type, Alert } from "..";

import style from "./Form.scss";

const Form = ({
  defaultValues,
  validationSchema,
  children,
  className,
  onSubmit = data => alert(JSON.stringify(data)),
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
