import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Modal, PopupMenu } from "../../components";
import { useOffclick } from "../../hooks";
import style from "./RightClickMenu.scss";
import { calcPixelString, classNames } from "../../helpers";

const RightClickMenu = ({
  children,
  className,
  position = {},
  isShowing = false,
  toggle
}) => {
  const menuRef = useRef();
  useOffclick(menuRef, toggle);
  console.log(position);
  return (
    <div ref={menuRef} data-testid="rightclickmenu">
      <Modal isShowing={isShowing}>
        <PopupMenu
          className={classNames(className, style.rightclickmenu)}
          style={{
            ...position
          }}
        >
          {children}
        </PopupMenu>
      </Modal>
    </div>
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
