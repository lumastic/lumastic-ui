import React from "react";
import PropTypes from "prop-types";
import style from "./AddEmoji.scss";
import classNames from "../../helpers/classNames";
import { Popup, PopupContent, PopupTrigger } from "../../components/Popup";
import { IconButton } from "../../components/IconButton";
import { EmojiPlus } from "../../icons/EmojiPlus";
import { EmojiSelector } from "../../components/EmojiSelector";

const AddEmoji = ({ className, onSelect, recommended, color = "grey" }) => (
  <Popup
    className={classNames(className, style.addemoji)}
    data-testid="addemoji"
    anchor={{ v: "bottom", h: "left" }}
    transform={{ v: "top", h: "left" }}
  >
    <PopupTrigger>
      <IconButton color={color} buttonClass={style.button}>
        <EmojiPlus />
      </IconButton>
    </PopupTrigger>
    <PopupContent className={style.popup}>
      <EmojiSelector onSelect={onSelect} recommended={recommended} />
    </PopupContent>
  </Popup>
);

AddEmoji.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  recommended: PropTypes.array,
  onSelect: PropTypes.func
};

export { AddEmoji };
