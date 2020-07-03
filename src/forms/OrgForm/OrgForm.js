import PropTypes from "prop-types";
import React from "react";
import { Button, Form, Label, TextInput } from "../../components";

const OrgForm = ({ onSubmit, defaultValues = {} }) => (
  <Form onSubmit={onSubmit} defaultValues={defaultValues}>
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
  defaultValues: PropTypes.object
};

export { OrgForm };
