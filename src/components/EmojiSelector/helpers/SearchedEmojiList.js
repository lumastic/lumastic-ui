import PropTypes from "prop-types";
import React, { memo } from "react";
import { Type } from "../../Type";
import style from "../EmojiSelector.scss";
import { EmojiButton } from "./EmojiButton";

const SearchedEmojiList = memo(({ emojis, setSelect, onSelect }) => (
  <>
    <Type color="grey" className={style.label}>
      Search Results
    </Type>
    <div className={style.emojis}>
      {emojis.map(emoji => (
        <EmojiButton
          key={emoji.order}
          emoji={emoji}
          setSelect={setSelect}
          onSelect={onSelect}
        />
      ))}
    </div>
  </>
));

SearchedEmojiList.propTypes = {
  emojis: PropTypes.array,
  setSelect: PropTypes.func,
  onSelect: PropTypes.func
};

export { SearchedEmojiList };
