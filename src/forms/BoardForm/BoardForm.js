import React from "react";
import PropTypes from "prop-types";
import * as yup from "yup";
import { Form, Label, TextInput, Button } from "../../components";
import style from "./BoardForm.scss";
import classNames from "../../helpers/classNames";

const boardSchema = yup.object().shape({
  name: yup.string().required("Board must have a name")
});

const BoardForm = ({ onSubmit, defaultValues = {} }) => (
  <Form
    onSubmit={onSubmit}
    defaultValues={defaultValues}
    validationSchema={boardSchema}
  >
    <div>
      <Label>Name</Label>
      <TextInput name="name" placeholder="Space name..." />
    </div>
    <Button variant="contained" type="submit">
      Save
    </Button>
  </Form>
);

BoardForm.propTypes = {
  onSubmit: PropTypes.func,
  defaultValues: PropTypes.object
};

export { BoardForm };
