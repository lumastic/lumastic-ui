import PropTypes from "prop-types";
import React from "react";
import * as yup from "yup";
import { Button, Form, Label, TextInput } from "../../components";

const orgSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Z0-9_]*$/,
      "Names can only contain letters, numbers, and underscores."
    )
    .required("This field is required"),
  bio: yup.string()
});

const OrgForm = ({ onSubmit, defaultValues = {}, validate = false }) => (
  <Form
    onSubmit={onSubmit}
    defaultValues={defaultValues}
    validationSchema={validate && orgSchema}
  >
    <div>
      <Label>Name</Label>
      <TextInput name="name" placeholder="Name..." />
    </div>
    <div>
      <Label>Bio</Label>
      <TextInput name="bio" placeholder="Short description ..." />
    </div>
    <Button variant="contained" type="submit">
      Save
    </Button>
  </Form>
);

OrgForm.propTypes = {
  onSubmit: PropTypes.func,
  validate: PropTypes.bool,
  defaultValues: PropTypes.object
};

export { OrgForm };
