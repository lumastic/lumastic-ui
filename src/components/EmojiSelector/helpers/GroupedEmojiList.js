import PropTypes from "prop-types";
import React, { memo } from "react";
import { Type } from "../../Type";
import style from "../EmojiSelector.scss";
import { EmojiButton } from "./EmojiButton";

const GroupedEmojiList = memo(({ emojis, setSelect, onSelect }) => (
  <div className={style.groups}>
    {Object.keys(emojis).map(group => (
      <div className={style.group} key={group}>
        <Type color="grey" className={style.label}>
          {group.replace("-", " & ")}
        </Type>
        <div className={style.emojis}>
          {emojis[group].map(emoji => (
            <EmojiButton
              key={emoji.order}
              emoji={emoji}
              setSelect={setSelect}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    ))}
  </div>
));

GroupedEmojiList.propTypes = {
  emojis: PropTypes.object,
  setSelect: PropTypes.func,
  onSelect: PropTypes.func
};

export { GroupedEmojiList };
