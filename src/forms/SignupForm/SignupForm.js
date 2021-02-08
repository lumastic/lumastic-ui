import React from "react";
import PropTypes from "prop-types";
import * as yup from "yup";
import { Form, TextInput, Label, Button } from "../../components";
import style from "./SignupForm.scss";
import classNames from "../../helpers/classNames";

const signupSchema = yup.object().shape({
  name: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("This field is required"),
  username: yup.string().required("This field is required"),
  password: yup.string().required("Please enter a password")
});

const SignupForm = ({ onSubmit }) => (
  <Form
    onSubmit={onSubmit}
    validationSchema={signupSchema}
    className={style.form}
  >
    <div>
      <Label>Your Name</Label>
      <TextInput name="name" placeholder="Abed Nadir" />
    </div>
    <div>
      <Label>Username</Label>
      <TextInput name="username" placeholder="inspector_spacetime" />
    </div>
    <div>
      <Label>Email</Label>
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
      Sign Up
    </Button>
  </Form>
);

SignupForm.propTypes = {
  onSubmit: PropTypes.func
};

export { SignupForm };
