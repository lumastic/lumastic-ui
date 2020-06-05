import PropTypes from "prop-types";
import React from "react";
import { Signature } from "../..";
import { Option, Select, Type, MenuItem } from "../../components";
import { Plus } from "../../icons";

const BoardSelect = ({
  boards = [],
  defaultValue,
  name,
  small,
  addOption,
  onChange,
  onOpen,
  onClose
}) => (
  <Select
    placeholder="Select a board..."
    defaultValue={defaultValue}
    name={name}
    small={small}
    addOption={addOption}
    onChange={onChange}
    onOpen={onOpen}
    onClose={onClose}
  >
    {boards.map(
      (board, key) =>
        board && (
          <Option key={board?.id || key} name={board?.id || key}>
            <Type>{board?.name}</Type>
          </Option>
        )
    )}
  </Select>
);

BoardSelect.propTypes = {
  boards: PropTypes.array,
  name: PropTypes.string,
  small: PropTypes.bool,
  defaultValue: PropTypes.string,
  addOption: PropTypes.node,
  onChange: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
};

export { BoardSelect };
