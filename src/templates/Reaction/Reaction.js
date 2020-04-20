import React from "react";
import PropTypes from "prop-types";
import style from "./Reaction.scss";
import classNames from "../../helpers/classNames";
import { Emoji } from "../../components/Emoji";
import { Chip } from "../../components/Chip";

const Reaction = ({
  className,
  emoji,
  reactors,
  onRemove,
  onClick,
  canRemove
}) => {
  const handleClick = e => {
    if (onClick) onClick(e);
  };
  const handleEnter = e => {
    if (e.keyCode === 13) {
      handleClick();
    }
  };
  const handleRemove = e => {
    e.stopPropagation();
    if (onRemove && canRemove) onRemove(e);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className={classNames(className, style.reaction)}
      data-testid="reaction"
      onClick={handleClick}
      onKeyDown={handleEnter}
    >
      <Chip
        className={style.chip}
        symbol={<Emoji emoji={emoji} className={style.emoji} />}
        label={`${reactors.length}`}
        color="grey"
        onRemove={canRemove ? handleRemove : null}
      />
    </div>
  );
};

Reaction.propTypes = {
  className: PropTypes.string,
  emoji: PropTypes.object,
  reactors: PropTypes.array,
  onRemove: PropTypes.func,
  canRemove: PropTypes.bool,
  onClick: PropTypes.func
};

export { Reaction };
