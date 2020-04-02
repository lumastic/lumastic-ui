import PropTypes from "prop-types";
import React from "react";
import { Avatar } from "../../components/Avatar";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Option } from "../../components/Option";
import { Select } from "../../components/Select";
import { Type } from "../../components/Type";
import { Spark } from "../../icons/Spark";
import { Signature } from "../Signature";

const SparkSelect = ({ sparks = [], avatarURL }) => (
  <Breadcrumbs>
    <Avatar src={avatarURL} />
    <Select placeholder="Select a spark...">
      {sparks.map((spark, key) => (
        <Option key={spark.id || key} name={spark.id || key}>
          <Signature>
            <Type body2>{spark.icon || <Spark />}</Type>
            <Type body2>{spark.name}</Type>
          </Signature>
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
