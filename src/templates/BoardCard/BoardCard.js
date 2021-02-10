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
  const { canEdit, updateCard } = useBoard();
  const formMethods = useForm();
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [edit, setEdit] = useState(false);

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
    <div ref={cardRef} id={card.id} className={style.wrapper}>
      <FormContext {...formMethods}>
        <Card
          className={classNames(className, style["board-card"])}
          onContextMenu={onRightClick}
          onBlur={formMethods?.handleSubmit(onBlur)}
          onClick={() => {
            if (canEdit && !edit) setEdit(true);
          }}
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
              // readOnly={!canEdit}
            />
          </Type>
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
