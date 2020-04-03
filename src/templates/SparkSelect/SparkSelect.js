import PropTypes from "prop-types";
import React from "react";
import { Avatar } from "../../components/Avatar";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Option } from "../../components/Option";
import { Select } from "../../components/Select";
import { SparkSignature } from "../SparkSignature";

const SparkSelect = ({ sparks = [], avatarURL }) => (
  <Breadcrumbs>
    <Avatar src={avatarURL} />
    <Select placeholder="Select a spark...">
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
  avatarURL: PropTypes.string
};

export { SparkSelect };
