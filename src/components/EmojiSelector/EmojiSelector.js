import PropTypes from "prop-types";
import React, { useEffect, useState, useCallback, memo } from "react";
import classNames from "../../helpers/classNames";
import { getEmojisByGroup, searchEmoji } from "../../helpers/emoji";
import { Emoji } from "../Emoji";
import { EmojiButton } from "./helpers/EmojiButton";
import { Search } from "../Search";
import { Type } from "../Type";
import { GroupedEmojiList } from "./helpers/GroupedEmojiList";
import { SearchedEmojiList } from "./helpers/SearchedEmojiList";
import style from "./EmojiSelector.scss";
import defaultEmoji from "./helpers/defaultEmoji.json";
import { Divider } from "../Divider";

const EmojiSelector = ({ className, onSelect, recommended }) => {
  const [emojis, setEmojis] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const [selected, setSelected] = useState(defaultEmoji);
  const [searchString, setSearchString] = useState();

  useEffect(() => {
    getEmojisByGroup().then(resp => setEmojis(resp));
  }, []);

  useEffect(() => {
    searchEmoji(searchString).then(resp => setSearchResults(resp));
  }, [searchString]);

  const selectEmoji = useCallback(
    (emo = defaultEmoji) => {
      setSelected(emo);
    },
    [setSelected]
  );

  const handleSelection = useCallback(
    (emo = defaultEmoji) => {
      onSelect(emo);
    },
    [onSelect]
  );

  return (
    <div
      className={classNames(className, style.emojiselector)}
      data-testid="emojiselector"
    >
      <div className={style.search}>
        <Search
          onChange={e => setSearchString(e.target.value)}
          placeholder="Search an emoji..."
          className={style["search-box"]}
        />
      </div>
      {recommended ? (
        <>
          <Divider />
          <div className={style.recommended}>
            <div className={style.emojis}>
              {recommended.map(emoji => (
                <EmojiButton
                  key={emoji.order}
                  emoji={emoji}
                  setSelect={selectEmoji}
                  onSelect={handleSelection}
                />
              ))}
            </div>
          </div>
        </>
      ) : null}

      {/* <div className={style.menu}>Tab Menu</div> */}
      <Divider />
      <div className={style.scrollcontainer}>
        {!searchString || searchString === "" ? (
          <GroupedEmojiList
            emojis={emojis}
            setSelect={selectEmoji}
            onSelect={handleSelection}
          />
        ) : (
          <SearchedEmojiList
            emojis={searchResults}
            setSelect={selectEmoji}
            onSelect={handleSelection}
          />
        )}
      </div>
      <div className={style.selection}>
        <div className={style["selected-emoji"]}>
          <Emoji emoji={selected} />
        </div>
        <div className={style["selected-description"]}>
          <Type body2>
            {selected.annotation
              ? `${selected.annotation[0].toUpperCase() +
                  selected.annotation.slice(1)}`
              : null}
          </Type>
          <Type caption color="grey">
            {selected.shortcodes ? `:${selected.shortcodes[0]}` : null}
          </Type>
        </div>
      </div>
    </div>
  );
};

EmojiSelector.propTypes = {
  className: PropTypes.string,
  onSelect: PropTypes.func,
  recommended: PropTypes.array
};

export { EmojiSelector };
