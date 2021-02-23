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
    data-testid="loginform"
  >
    <div>
      <Label>Username or Email</Label>
      <TextInput name="email" placeholder="harry@hogwarts.edu" />
    </div>

    <div>
      <Label>Password</Label>
      <TextInput name="password" type="password" placeholder="i l0ve g1nny!!" />
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
