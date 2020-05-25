import PropTypes from "prop-types";
import React from "react";
import { Option, Select, Type } from "../../components";

const BoardSelect = ({
  boards = [],
  defaultValue,
  name,
  small,
  onChange,
  onOpen,
  onClose
}) => (
  <Select
    placeholder="Select a board..."
    defaultValue={defaultValue}
    name={name}
    small={small}
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
  name: PropTypes.string.isRequired,
  small: PropTypes.bool,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
};

export { BoardSelect };
