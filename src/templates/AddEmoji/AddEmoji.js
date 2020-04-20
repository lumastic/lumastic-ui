import React from "react";
import PropTypes from "prop-types";
import style from "./AddEmoji.scss";
import classNames from "../../helpers/classNames";
import { Popup, PopupContent, PopupTrigger } from "../../components/Popup";
import { IconButton } from "../../components/IconButton";
import { EmojiPlus } from "../../icons/EmojiPlus";
import { EmojiSelector } from "../../components/EmojiSelector";

const AddEmoji = ({ className, onSelect, color = "grey" }) => (
  <Popup
    className={classNames(className, style.addemoji)}
    data-testid="addemoji"
  >
    <PopupTrigger>
      <IconButton color={color} size="big">
        <EmojiPlus />
      </IconButton>
    </PopupTrigger>
    <PopupContent className={style.popup}>
      <EmojiSelector onSelect={onSelect} />
    </PopupContent>
  </Popup>
);

AddEmoji.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  onSelect: PropTypes.func
};

export { AddEmoji };
