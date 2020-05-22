import PropTypes from "prop-types";
import React from "react";
import { Avatar, Breadcrumbs, Link, Tooltip } from "../../components";
import { SparkSelect } from "..";
import { profileRoute } from "../../routes";

const SparkSelectCrumbs = ({
  sparks = [],
  organization = {},
  defaultValue,
  name,
  small,
  onChange,
  onOpen,
  onClose
}) => (
  <Breadcrumbs>
    <Link to={profileRoute(organization.name)} inline>
      <Tooltip position="top" label={organization.name || "Organization Name"}>
        <Avatar src={organization.avatarURL} />
      </Tooltip>
    </Link>
    <SparkSelect
      sparks={sparks}
      defaultValue={defaultValue}
      name={name}
      small={small}
      onChange={onChange}
      onOpen={onOpen}
      onClose={onClose}
    />
  </Breadcrumbs>
);

SparkSelectCrumbs.propTypes = {
  sparks: PropTypes.array,
  organization: PropTypes.object,
  name: PropTypes.string.isRequired,
  small: PropTypes.bool,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
};

export { SparkSelectCrumbs };
