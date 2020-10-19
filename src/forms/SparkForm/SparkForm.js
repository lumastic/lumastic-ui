import PropTypes from "prop-types";
import React, { useState } from "react";
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
import { Stealth, Users } from "../../icons";
import { upgradeRoute } from "../../routes";
import { OrgSelect, OrgSignature, Signature } from "../../templates";
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
}) => {
  const [organization, setOrganization] = useState(organizations[0]);
  return (
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
          {organizations.length > 1 ? (
            <OrgSelect
              name="belongsTo"
              defaultValue={organizations[0]?.id}
              organizations={organizations}
              onChange={id =>
                setOrganization(organizations?.find(org => org?.id === id))
              }
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
          <TextInput name="title" placeholder="Give it a title..." />
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
          <Users /> Open
        </Type>
        <Type body2 color="grey">
          Anyone can see this spark. You choose who can collaborate.
        </Type>
      </RadioInput>
      <RadioInput
        name="visibility"
        value="Private"
        disabled={!organization?.isLicensed}
      >
        <Type color={organization?.isLicensed ? null : "grey"}>
          <Stealth /> Stealth
        </Type>
        <Type body2 color="grey">
          {organization?.isLicensed
            ? "You control who can see and collaborate on this spark."
            : "You need a pro membership to create stealth sparks."}
        </Type>
        {organization?.isLicensed || (
          <Link to={upgradeRoute}>
            <Signature>
              <Type underline>🚀</Type>
              <Type underline color="primary">
                Upgrade now!
              </Type>
            </Signature>
          </Link>
        )}
      </RadioInput>
      <Button variant="contained" type="submit">
        Save
      </Button>
    </Form>
  );
};

SparkForm.propTypes = {
  organizations: PropTypes.array,
  license: PropTypes.bool,
  onSubmit: PropTypes.func,
  defaultValues: PropTypes.object
};

export { SparkForm };
