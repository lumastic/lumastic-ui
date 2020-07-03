import PropTypes from "prop-types";
import React from "react";
import { Signature } from "..";
import { Avatar, Type, Tooltip, Link } from "../../components";
import { profileRoute } from "../../routes";

const OrgSignature = ({ organization = {}, user = {} }) => (
  <Signature>
    <Link to={profileRoute(organization.name || user.username)} inline>
      <Tooltip
        label={organization.name || user.name || "Organization name"}
        position="top"
      >
        <Avatar src={organization.avatarURL || user.avatarURL} />
      </Tooltip>
    </Link>
    <Link to={profileRoute(organization.name || user.username)} inline>
      <Type>{organization.name || user.name}</Type>
    </Link>
  </Signature>
);

OrgSignature.propTypes = {
  organization: PropTypes.object,
  user: PropTypes.bool
};

export { OrgSignature };
