import React, { createElement, Children, useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import style from "./Form.scss";
import classNames from "../../helpers/classNames";

const Form = ({
  defaultValues,
  validationSchema,
  children,
  className,
  onSubmit = data => alert(JSON.stringify(data)),
  debug
}) => {
  const { register, setValue, getValues, handleSubmit } = useForm({
    defaultValues,
    validationSchema
  });
  const [values, setValues] = useState(getValues());
  return (
    <>
      <form
        className={className || style.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        {Children.map(children, child => (
          <>
            {child.props.name
              ? createElement(child.type, {
                  ...child.props,
                  register,
                  setValue,
                  key: child.props.name
                })
              : child}
          </>
        ))}
      </form>

      {debug ? (
        <div className={style.debugger}>
          <pre onClick={() => setValues(getValues())}>
            DEBUGGER: Click to Refresh
            <br />
            {JSON.stringify(values, null, 2) || null}
          </pre>
        </div>
      ) : null}
    </>
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
