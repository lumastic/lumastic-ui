import PropTypes from "prop-types";
import React from "react";
import { SparkSignature } from "..";
import { Option, Select } from "../../components";

const SparkSelect = ({
  sparks = [],
  defaultValue,
  name,
  small,
  addOption,
  onChange,
  onOpen,
  onClose
}) => (
  <Select
    placeholder="Select a spark..."
    defaultValue={defaultValue}
    name={name}
    addOption={addOption}
    small={small}
    onChange={onChange}
    onOpen={onOpen}
    onClose={onClose}
  >
    {sparks.map(
      (spark, key) =>
        spark && (
          <Option key={spark?.id || key} name={spark?.id || key}>
            <SparkSignature spark={spark} small={small} />
          </Option>
        )
    )}
  </Select>
);

SparkSelect.propTypes = {
  sparks: PropTypes.array,
  name: PropTypes.string,
  small: PropTypes.bool,
  defaultValue: PropTypes.string,
  addOption: PropTypes.node,
  onChange: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
};

export { SparkSelect };
