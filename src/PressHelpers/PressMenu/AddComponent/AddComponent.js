import React, { memo } from "react";
import PropTypes from "prop-types";
import {
  Popup,
  PopupTrigger,
  Tooltip,
  IconButton,
  PopupContent,
  Type,
  PopupMenu,
  MenuItem
} from "../../../components";
import { Plus } from "../../../icons";

const AddComponent = memo(({ insertEditor, insertComponent, components }) => (
  <Popup anchor={{ v: "top", h: "left" }} transform={{ v: "top", h: "left" }}>
    <PopupTrigger>
      <Tooltip label="Add Component" position="right">
        <IconButton color="grey">
          <Plus />
        </IconButton>
      </Tooltip>
    </PopupTrigger>
    <PopupContent render={PopupMenu}>
      <MenuItem onClick={insertEditor}>
        <Type body2>Text Block</Type>
      </MenuItem>
      {components?.map(component => (
        <MenuItem
          onClick={() => insertComponent(component)}
          key={component?.name}
        >
          <Type body2>{component?.displayName}</Type>
        </MenuItem>
      ))}
    </PopupContent>
  </Popup>
));

AddComponent.propTypes = {
  insertEditor: PropTypes.func,
  insertComponent: PropTypes.func,
  components: PropTypes.array
};

export { AddComponent };
