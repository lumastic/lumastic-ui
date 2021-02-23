import PropTypes from "prop-types";
import React from "react";
import { Signature } from "..";
import { Avatar, Type, Tooltip, Link } from "../../components";
import { profileRoute } from "../../routes";

const OrgSignature = ({ organization = {}, user = {}, small = false }) => (
  <Signature data-testid="orgsignature">
    <Link to={profileRoute(user.username || organization.name)} inline>
      <Tooltip label={user.name || organization.name} position="top">
        <Avatar
          src={user.userProfile?.avatarURL || organization.avatarURL}
          size={small && "small"}
        />
      </Tooltip>
    </Link>
    <Link to={profileRoute(user.username || organization.name)} inline>
      <Type body2={small}>{user.name || organization.name}</Type>
    </Link>
  </Signature>
);

OrgSignature.propTypes = {
  organization: PropTypes.object,
  user: PropTypes.bool,
  small: PropTypes.bool
};

export { OrgSignature };
