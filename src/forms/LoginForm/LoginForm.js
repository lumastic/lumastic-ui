import React from "react";
import PropTypes from "prop-types";
import * as yup from "yup";
import { Form, TextInput, Label, Button } from "../../components";
import style from "./LoginForm.scss";
import classNames from "../../helpers/classNames";

const loginSchema = yup.object().shape({
  email: yup.string().required("This field is required"),
  password: yup.string().required("Please enter a password")
});

const LoginForm = ({ className, onSubmit }) => (
  <Form
    onSubmit={onSubmit}
    validationSchema={loginSchema}
    className={style.form}
  >
    <div>
      <Label>Username or Email</Label>
      <TextInput name="email" placeholder="abed@troyandabedinthemorning.biz" />
    </div>

    <div>
      <Label>Password</Label>
      <TextInput
        name="password"
        type="password"
        placeholder="buTTered n00dlez!"
      />
    </div>

    <Button variant="contained" type="submit">
      Sign In
    </Button>
  </Form>
);

LoginForm.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func
};

export { LoginForm };
