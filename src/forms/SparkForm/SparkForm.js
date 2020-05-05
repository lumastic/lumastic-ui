import React from "react";
import PropTypes from "prop-types";
import * as yup from "yup";
import {
  Form,
  TextInput,
  Label,
  Button,
  Select,
  Option,
  Type,
  Avatar,
  RadioInput
} from "../../components";
import { Users } from "../../icons/Users";
import { UserLock } from "../../icons/UserLock";
import { Signature } from "../../templates";
import style from "./SparkForm.scss";
import classNames from "../../helpers/classNames";
import withLink from "../../helpers/withLink";

const sparkSchema = yup.object().shape({
  owner: yup.string().required("This field is required"),
  title: yup.string().required("This field is required"),
  description: yup.string(),
  visibility: yup.string().required("This field is required")
});
const SparkForm = ({ organizations = [], license = false, onSubmit }) => (
  <Form
    onSubmit={onSubmit}
    validationSchema={sparkSchema}
    defaultValues={{ visibility: "public" }}
  >
    <div className={style.header}>
      <div>
        <Label>Owner</Label>
        <Select name="owner" defaultValue={organizations[0].id}>
          {organizations.map((org, index) => (
            <Option name={org.id} key={index}>
              <Signature>
                <Avatar src={org.avatarURL} setSize="1.25rem" />
                <Type>{org.name}</Type>
              </Signature>
            </Option>
          ))}
        </Select>
      </div>
      <div>
        <Label>Title</Label>
        <TextInput name="title" placeholder="Name your project..." />
      </div>
    </div>

    <div>
      <Label>Description</Label>
      <TextInput
        name="description"
        placeholder="Describe what you're working on..."
      />
    </div>

    <RadioInput name="visibility" value="public">
      <Type>
        <Users /> Public
      </Type>
      <Type body2 color="grey">
        Everyone can see this spark. You choose who can collaborate.
      </Type>
    </RadioInput>
    <RadioInput name="visibility" value="private" disabled={!license}>
      <Type color={license ? null : "grey"}>
        <UserLock /> Private
      </Type>
      <Type body2 color="grey">
        {license
          ? "You control who can see and collaborate on this spark."
          : "You need a pro account to create private sparks."}
      </Type>
      {license ||
        withLink(
          <Type caption color="primary">
            Upgrade Now
          </Type>
        )}
    </RadioInput>
    <Button variant="contained" type="submit">
      Save
    </Button>
  </Form>
);

SparkForm.propTypes = {
  organizations: PropTypes.array,
  license: PropTypes.bool,
  onSubmit: PropTypes.func
};

export { SparkForm };
