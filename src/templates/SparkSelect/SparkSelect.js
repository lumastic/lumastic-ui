import PropTypes from "prop-types";
import React from "react";
import { SparkSignature } from "..";
import {
  Avatar,
  Breadcrumbs,
  Option,
  Select,
  Tooltip,
  Link
} from "../../components";
import { profileRoute } from "../../routes";

const SparkSelect = ({
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

    <Select
      placeholder="Select a spark..."
      defaultValue={defaultValue}
      name={name}
      small={small}
      onChange={onChange}
      onOpen={onOpen}
      onClose={onClose}
    >
      {sparks.map((spark, key) => (
        <Option key={spark.id || key} name={spark.id || key}>
          <SparkSignature spark={spark} small={small} />
        </Option>
      ))}
    </Select>
  </Breadcrumbs>
);

SparkSelect.propTypes = {
  sparks: PropTypes.array,
  organization: PropTypes.object,
  name: PropTypes.string.isRequired,
  small: PropTypes.bool,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
};

export { SparkSelect };
