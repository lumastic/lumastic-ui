import PropTypes from "prop-types";
import React, { useRef, useState, useEffect } from "react";
import { useDroppable, useRightClick } from "../../hooks";
import { useBoard } from "../../views";
import { calcPixelString } from "../../helpers";
import { RightClickMenu } from "../../templates";
import { MenuItem } from "../Menu";
import classNames from "../../helpers/classNames";
import style from "./Canvas.scss";

const Canvas = ({ children, className, size = {} }) => {
  const canvasRef = useRef(null);
  const {
    updateCanvas,
    setUpdateCanvas,
    createCard,
    updateCard,
    activeCard,
    setSelectedCards
  } = useBoard();

  const onDrop = () => {
    if (setUpdateCanvas) setUpdateCanvas(o => !o);
  };

  const onDoubleClick = () => {
    console.log("Double clicked canvas");
  };

  useEffect(() => {
    const canvas = canvasRef?.current;
    if (!canvas) return;
    const {
      width: canvasWidth,
      height: canvasHeight
    } = canvas.getBoundingClientRect();
    const newDimension = { width: canvasWidth, height: canvasHeight };
    const kiddos = Array.from(canvas.children);
    kiddos.forEach(kid => {
      const { offsetLeft: x, offsetTop: y } = kid;
      const { width, height } = kid.getBoundingClientRect();
      if (x + width > newDimension.width) {
        newDimension.width = x + width;
      }
      if (y + height > newDimension.height) {
        newDimension.height = y + height;
      }
    });
    canvas.style.width = calcPixelString(newDimension.width + 40);
  }, [updateCanvas, canvasRef]);

  useDroppable({ ref: canvasRef, onDrop });

  // Right Click Handlers
  const {
    rightClickShowing,
    toggleRightClick,
    rightClickPosition,
    setRightClickPosition
  } = useRightClick();

  const [canvasPosition, setCanvasPosition] = useState({ x: 0, y: 0 });

  const rightClick = e => {
    e.preventDefault();
    // Set right click position
    const clickPosition = { x: e.clientX, y: e.clientY };
    console.log(clickPosition);
    const {
      x: offsetX,
      y: offsetY
    } = canvasRef.current.getBoundingClientRect();
    setCanvasPosition({
      x: parseInt(clickPosition.x - offsetX),
      y: parseInt(clickPosition.y - offsetY)
    });
    setRightClickPosition(clickPosition);
    // Toggle right click
    toggleRightClick(true);
  };

  return (
    <div
      className={classNames(className, style.canvas, "droppable")}
      data-testid="canvas"
      style={{ ...size }}
      ref={canvasRef}
      onContextMenu={rightClick}
      onDoubleClick={onDoubleClick}
    >
      {children}
      <RightClickMenu
        position={rightClickPosition}
        isShowing={rightClickShowing}
      >
        <MenuItem>Test</MenuItem>
      </RightClickMenu>
    </div>
  );
};

Canvas.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.object
};

export { Canvas };