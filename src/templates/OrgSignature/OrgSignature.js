import PropTypes from "prop-types";
import React from "react";
import { Signature } from "..";
import { Avatar, Type, Tooltip } from "../../components";
import { profileRoute } from "../../routes";

const OrgSignature = ({ organization = {}, user = {} }) => (
  <Signature>
    <Tooltip
      label={organization.name || user.name || "Organization name"}
      position="top"
    >
      <Avatar src={organization.avatarURL || user.avatarURL} />
    </Tooltip>

    <Type>{organization.name || user.name}</Type>
  </Signature>
);

OrgSignature.propTypes = {
  organization: PropTypes.object,
  user: PropTypes.bool
};

export { OrgSignature };
