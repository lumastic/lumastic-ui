import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import { MoreMenu } from "..";
import { Card, Divider, MenuItem, Type } from "../../components";
import classNames from "../../helpers/classNames";
import { useDraggable, useDroppable, useResizable } from "../../hooks";
import { useBoard } from "../../views";
import style from "./BoardCard.scss";

const BoardCard = memo(({ className, card = {}, block = false }) => {
  const cardRef = useRef(null);
  const resizeHandle = useRef(null);
  const { canEdit, setActiveCard } = useBoard();
  const [edit, setEdit] = useState(false);
  const [optionsOpen, setOptionsOpen] = useState(false);
  useDraggable({
    ref: cardRef,
    draggingClass: style.hover,
    disable: edit
  });

  const onDrop = () => {
    console.log("Create stack");
  };
  useDroppable({ ref: cardRef, onDrop, disable: card.parentCard });
  const onResizeEnd = () => console.log("End resize");
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
        { [style.block]: block },
        {
          droppable: !card.parentCard
        }
      )}
      style={
        !block
          ? {
              left: `${card.x}px`,
              top: `${card.y}px`,
              width: `${card.width}px`,
              height: `${card.height}px`
            }
          : null
      }
      ref={cardRef}
    >
      <Card
        className={classNames(className, style["board-card"])}
        id={card.id}
        onContextMenu={onRightClick}
      >
        {card.content || "Test content"}
      </Card>
      <div className={style.resize} ref={resizeHandle}>
        T
      </div>
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
  card: PropTypes.object,
  className: PropTypes.string,
  block: PropTypes.bool
};

export { BoardCard };
