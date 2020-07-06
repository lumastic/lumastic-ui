import PropTypes from "prop-types";
import React from "react";
import * as yup from "yup";
import {
  Button,
  Form,
  Label,
  Link,
  RadioInput,
  TextInput,
  Type
} from "../../components";
import { UserLock, Users } from "../../icons";
import { upgradeRoute } from "../../routes";
import { OrgSelect, OrgSignature } from "../../templates";
import style from "./SparkForm.scss";

const sparkSchema = yup.object().shape({
  belongsTo: yup.string().required("This field is required"),
  title: yup.string().required("This field is required"),
  description: yup.string(),
  visibility: yup.string().required("This field is required")
});
const SparkForm = ({
  organizations = [],
  license = false,
  onSubmit,
  defaultValues = {}
}) => (
  <Form
    onSubmit={onSubmit}
    validationSchema={sparkSchema}
    defaultValues={{
      visibility: "Public",
      belongsTo: organizations[0]?.id,
      ...defaultValues
    }}
  >
    <div className={style.header}>
      <div>
        <Label>Owner</Label>
        {organizations > 1 ? (
          <OrgSelect
            name="belongsTo"
            defaultValue={organizations[0]?.id}
            organizations={organizations}
          />
        ) : (
          <>
            <OrgSignature
              organization={organizations[0]}
              user={
                organizations[0]?.isUserOrganization &&
                organizations[0]?.createdBy
              }
            />
            <TextInput name="belongsTo" hidden />
          </>
        )}
      </div>
      <div>
        <Label>Title</Label>
        <TextInput name="title" placeholder="Give it a name..." />
      </div>
    </div>

    <div>
      <Label>Description</Label>
      <TextInput
        name="description"
        placeholder="Describe what you're working on..."
      />
    </div>

    <RadioInput name="visibility" value="Public">
      <Type>
        <Users /> Public
      </Type>
      <Type body2 color="grey">
        Everyone can see this spark. You choose who can collaborate.
      </Type>
    </RadioInput>
    <RadioInput name="visibility" value="Private" disabled={!license}>
      <Type color={license ? null : "grey"}>
        <UserLock /> Private
      </Type>
      <Type body2 color="grey">
        {license
          ? "You control who can see and collaborate on this spark."
          : "You need a pro account to create private sparks."}
      </Type>
      {license || (
        <Link to={upgradeRoute}>
          <Type caption color="primary">
            Buy us coffee and upgrade now!
          </Type>
        </Link>
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
  onSubmit: PropTypes.func,
  defaultValues: PropTypes.object
};

export { SparkForm };
