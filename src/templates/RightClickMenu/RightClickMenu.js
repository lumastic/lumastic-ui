import PropTypes from "prop-types";
import React, { useRef } from "react";
import { Modal, PopupMenu } from "../../components";
import { classNames } from "../../helpers";
import { useOffclick } from "../../hooks";
import style from "./RightClickMenu.scss";

const RightClickMenu = ({
  children,
  className,
  position = {},
  isShowing = false,
  toggle
}) => {
  const menuRef = useRef();
  useOffclick([menuRef], toggle);

  return (
    <Modal isShowing={isShowing}>
      <div ref={menuRef} data-testid="rightclickmenu">
        <PopupMenu
          className={classNames(className, style.rightclickmenu)}
          style={{
            ...position
          }}
        >
          {children}
        </PopupMenu>
      </div>
    </Modal>
  );
};

RightClickMenu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  position: PropTypes.object,
  isShowing: PropTypes.bool,
  toggle: PropTypes.func
};

export { RightClickMenu };
