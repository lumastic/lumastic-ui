import React from "react";
import PropTypes from "prop-types";
import style from "./Emoji.scss";
import classNames from "../../helpers/classNames";

const Emoji = ({ emoji = {}, className }) => (
  <span
    className={classNames(className, style.emoji)}
    role="img"
    aria-label={emoji.annotation}
    aria-hidden={!emoji.annotation}
    data-testid="emoji"
  >
    {emoji.unicode || emoji.emoticon}
  </span>
);
Emoji.propTypes = {
  emoji: PropTypes.object.isRequired,
  className: PropTypes.string
};

export { Emoji };
