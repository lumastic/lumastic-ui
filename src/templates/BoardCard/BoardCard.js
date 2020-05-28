import React, { useRef, useState, memo } from "react";
import PropTypes from "prop-types";
import { useDraggable, useDroppable, useRightClick } from "../../hooks";
import { Card, MenuItem, Type, Divider } from "../../components";
import { useBoard } from "../../views";
import { MoreMenu } from "..";
import style from "./BoardCard.scss";
import classNames from "../../helpers/classNames";

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
  // eslint-disable-next-line react-hooks/rules-of-hooks
  if (!card.parentCard) useDroppable({ ref: cardRef, onDrop });

  const onRightClick = e => {
    console.log("Right click card", card.id);
    setActiveCard(card);
  };

  return (
    <div
      className={classNames(style.wrapper, { [style.block]: block })}
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
    >
      <Card
        className={classNames(className, style["board-card"], {
          droppable: !card.parentCard
        })}
        id={card.id}
        onContextMenu={onRightClick}
        ref={cardRef}
      >
        {card.content || "Test content"}
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
  card: PropTypes.object,
  className: PropTypes.string,
  block: PropTypes.bool
};

export { BoardCard };
