import PropTypes from "prop-types";
import React, { memo, useRef, useState, useEffect } from "react";
import { MoreMenu } from "..";
import { Card, Divider, MenuItem, Type } from "../../components";
import { Resize } from "../../icons";
import classNames from "../../helpers/classNames";
import { useDraggable, useDroppable, useResizable } from "../../hooks";
import { useBoard } from "../../views";
import style from "./BoardCard.scss";

const BoardCard = memo(({ children, className, card = {}, block = false }) => {
  const cardRef = useRef(null);
  const resizeHandle = useRef(null);
  const { canEdit, setActiveCard, updateCard, setUpdateCanvas } = useBoard();
  const [edit, setEdit] = useState(false);
  const [absolute, setAbsolute] = useState(!block);
  const [optionsOpen, setOptionsOpen] = useState(false);

  useEffect(() => {
    if (setUpdateCanvas) setUpdateCanvas(o => !o);
  }, [setUpdateCanvas]);

  useDraggable({
    ref: cardRef,
    draggingClass: style.hover,
    disable: edit,
    onDragStart: () => setAbsolute(true)
  });

  const onDrop = () => {
    console.log("Create stack");
  };
  useDroppable({ ref: cardRef, onDrop, disable: card.parentCard });

  const onResizeEnd = ({ dimension }) => {
    if (updateCard)
      updateCard(card.id, {
        location: { x: card.x, y: card.y, z: card.z, ...dimension }
      });
  };
  useResizable({
    ref: cardRef,
    handle: resizeHandle,
    onResizeEnd
  });

  const onRightClick = e => {
    console.log("Right click card", card.id);
    setActiveCard(card);
  };

  return (
    <div
      className={classNames(
        style.wrapper,
        { [style.block]: !absolute },
        {
          droppable: !card.parentCard
        }
      )}
      style={
        absolute
          ? {
              left: `${card.x}px`,
              top: `${card.y}px`,
              width: `${card.width}px`,
              height: `${card.height}px`
            }
          : null
      }
      ref={cardRef}
      id={card.id}
    >
      <Card
        className={classNames(className, style["board-card"])}
        onContextMenu={onRightClick}
      >
        {card.content || "Test content"}
        {children}
        <div className={style.resize} ref={resizeHandle}>
          {absolute && <Resize />}
        </div>
      </Card>

      <div
        className={classNames(style.options, {
          [style.optionsopen]: optionsOpen
        })}
      >
        <div>
          <MoreMenu
            position="right"
            onOpen={() => setOptionsOpen(true)}
            onClose={() => setOptionsOpen(false)}
          >
            <MenuItem>
              <Type body2>Cut</Type>
            </MenuItem>
            <MenuItem>
              <Type body2>Copy</Type>
            </MenuItem>
            <MenuItem>
              <Type body2>Archive</Type>
            </MenuItem>
            <Divider />
            <MenuItem>
              <Type body2>Bring to front</Type>
            </MenuItem>
            <MenuItem>
              <Type body2>Send to back</Type>
            </MenuItem>
          </MoreMenu>
        </div>
      </div>
    </div>
  );
});

BoardCard.propTypes = {
  children: PropTypes.node,
  card: PropTypes.object,
  className: PropTypes.string,
  block: PropTypes.bool
};

export { BoardCard };
