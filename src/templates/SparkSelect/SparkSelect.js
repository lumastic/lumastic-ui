import PropTypes from "prop-types";
import React from "react";
import { Avatar } from "../../components/Avatar";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Option } from "../../components/Option";
import { Select } from "../../components/Select";
import { SparkSignature } from "../SparkSignature";
import { Tooltip } from "../../components/Tooltip";

const SparkSelect = ({
  sparks = [],
  organization = {},
  defaultValue,
  onChange,
  onOpen,
  onClose
}) => (
  <Breadcrumbs>
    <Tooltip position="top" label={organization.name || "Organization Name"}>
      <Avatar src={organization.avatarURL} />
    </Tooltip>
    <Select
      placeholder="Select a spark..."
      defaultValue={defaultValue}
      onChange={onChange}
      onOpen={onOpen}
      onClose={onClose}
    >
      {sparks.map((spark, key) => (
        <Option key={spark.id || key} name={spark.id || key}>
          <SparkSignature spark={spark} />
        </Option>
      ))}
    </Select>
  </Breadcrumbs>
);

SparkSelect.propTypes = {
  sparks: PropTypes.array,
  organization: PropTypes.object,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
};

export { SparkSelect };
