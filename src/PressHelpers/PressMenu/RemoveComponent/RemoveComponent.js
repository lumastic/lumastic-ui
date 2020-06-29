import React, { memo } from "react";
import PropTypes from "prop-types";
import { IconButton, Tooltip } from "../../../components";
import { Trash } from "../../../icons";

const RemoveComponent = memo(({ removeComponent }) => (
  <Tooltip label="Remove" position="left">
    <IconButton color="grey" onClick={removeComponent}>
      <Trash />
    </IconButton>
  </Tooltip>
));

RemoveComponent.propTypes = {
  removeComponent: PropTypes.func
};

export { RemoveComponent };
