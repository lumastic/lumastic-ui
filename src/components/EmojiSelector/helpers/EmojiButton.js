import PropTypes from "prop-types";
import React from "react";
import { Emoji } from "../../Emoji";
import style from "../EmojiSelector.scss";

const EmojiButton = ({ emoji, setSelect, onSelect }) => (
  <div
    role="button"
    tabIndex={0}
    className={style.emoji}
    onMouseEnter={() => setSelect(emoji)}
    onMouseLeave={() => setSelect()}
    onClick={() => onSelect(emoji)}
  >
    <Emoji emoji={emoji} />
  </div>
);

EmojiButton.propTypes = {
  emoji: PropTypes.object,
  setSelect: PropTypes.func,
  onSelect: PropTypes.func
};

export { EmojiButton };
