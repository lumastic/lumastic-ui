import PropTypes from "prop-types";
import React from "react";
import { Signature } from "..";
import { Avatar, Type, Tooltip, Link } from "../../components";
import { profileRoute } from "../../routes";

const OrgSignature = ({ organization = {}, user = {} }) => (
  <Signature>
    <Link to={profileRoute(user.username || organization.name)} inline>
      <Tooltip label={user.name || organization.name} position="top">
        <Avatar src={user.userProfile?.avatarURL || organization.avatarURL} />
      </Tooltip>
    </Link>
    <Link to={profileRoute(user.username || organization.name)} inline>
      <Type>{user.name || organization.name}</Type>
    </Link>
  </Signature>
);

OrgSignature.propTypes = {
  organization: PropTypes.object,
  user: PropTypes.bool
};

export { OrgSignature };
