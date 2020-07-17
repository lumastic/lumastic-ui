import PropTypes from "prop-types";
import React, { memo, useEffect, useRef, useState } from "react";
import { FormContext, useForm } from "react-hook-form";
import { MoreMenu } from "..";
import { Card, Divider, MenuItem, PressInput, Type } from "../../components";
import { parseContent } from "../../helpers";
import classNames from "../../helpers/classNames";
import { useDraggable, useDroppable, useResizable } from "../../hooks";
import { Resize } from "../../icons";
import { useBoard } from "../../views";
import style from "./BoardCard.scss";

const BoardCard = memo(({ children, className, card = {}, block = false }) => {
  const cardRef = useRef(null);
  const resizeHandle = useRef(null);
  const { canEdit, setActiveCard, updateCard, setUpdateCanvas } = useBoard();
  const formMethods = useForm();
  const [absolute, setAbsolute] = useState(!block);
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (setUpdateCanvas) setUpdateCanvas(o => !o);
  }, [setUpdateCanvas]);

  useDraggable({
    ref: cardRef,
    draggingClass: style.hover,
    onDragStart: () => setAbsolute(true),
    disable: edit
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
    e.stopPropagation();
    // if (edit) {
    //
    // } else if (setActiveCard) {
    //   setActiveCard(card);
    // }
  };

  const menuHandler = ({ type }) => {
    switch (type) {
      case "archive":
        if (updateCard)
          updateCard(card.id, {
            archived: true
          });
        break;
      default:
        break;
    }
  };

  const onBlur = data => {
    if (updateCard) {
      updateCard(card.id, {
        content: data?.content
      });
      setEdit(false);
    }
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
      <FormContext {...formMethods}>
        <Card
          className={classNames(className, style["board-card"])}
          onContextMenu={onRightClick}
          onBlur={formMethods?.handleSubmit(onBlur)}
          onClick={() => {
            if (canEdit && !edit) setEdit(true);
          }}
          onDoubleClick={e => e.stopPropagation()}
          onKeyDown={e => {
            if (e.metaKey && e.keyCode === 13) {
              e.target.blur();
            }
          }}
        >
          <Type tag="div">
            <PressInput
              name="content"
              defaultValue={parseContent(card?.content)}
              readOnly={!canEdit}
            />
          </Type>
          <div className={style.resize} ref={resizeHandle}>
            {absolute && <Resize />}
          </div>
        </Card>
      </FormContext>

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
            {/* <MenuItem>
                <Type body2>Cut</Type>
              </MenuItem>
              <MenuItem>
                <Type body2>Copy</Type>
              </MenuItem> */}
            <MenuItem onClick={() => menuHandler({ type: "archive" })}>
              <Type body2>Archive</Type>
            </MenuItem>
            {/* <Divider /> */}
            {/* <MenuItem>
                <Type body2>Bring to front</Type>
              </MenuItem>
              <MenuItem>
                <Type body2>Send to back</Type>
              </MenuItem> */}
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
