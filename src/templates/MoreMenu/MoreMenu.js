import React from "react";
import PropTypes from "prop-types";
import { IconButton } from "../../components/IconButton";
import { EllipsisV } from "../../icons/EllipsisV";
import { Popup, PopupTrigger, PopupContent } from "../../components/Popup";
import { PopupMenu } from "../../components/PopupMenu";

const MoreMenu = ({
  children,
  size,
  setSize,
  position = "left",
  onOpen,
  onClose,
  ...rest
}) => (
  <Popup
    anchor={{ v: "top", h: position }}
    transform={{ v: "top", h: position }}
    onOpen={onOpen}
    onClose={onClose}
  >
    <PopupTrigger>
      <IconButton color="grey" size={size} setSize={setSize} {...rest}>
        <EllipsisV />
      </IconButton>
    </PopupTrigger>
    <PopupContent render={PopupMenu}>{children}</PopupContent>
  </Popup>
);

MoreMenu.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(["big", "small"]),
  position: PropTypes.oneOf(["left", "right"]),
  setSize: PropTypes.string,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
};

export { MoreMenu };
