import PropTypes from "prop-types";
import React from "react";
import { Avatar } from "../../components/Avatar";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Option } from "../../components/Option";
import { Select } from "../../components/Select";
import { SparkSignature } from "../SparkSignature";

const SparkSelect = ({
  sparks = [],
  avatarURL,
  defaultValue,
  onChange,
  onOpen,
  onClose
}) => (
  <Breadcrumbs>
    <Avatar src={avatarURL} />
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
  avatarURL: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
};

export { SparkSelect };
