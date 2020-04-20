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
  onClick,
  canReact,
  userReacted
}) => {
  const handleClick = e => {
    if (onClick) onClick(e, userReacted);
  };
  const handleEnter = e => {
    if (e.keyCode === 13) {
      handleClick(e, userReacted);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className={classNames(className, style.reaction)}
      data-testid="reaction"
      onClick={canReact ? handleClick : null}
      onKeyDown={canReact ? handleEnter : null}
    >
      <Chip
        className={classNames(
          {
            [style.reacted]: userReacted
          },
          style.chip
        )}
        symbol={<Emoji emoji={emoji} className={style.emoji} />}
        label={`${reactors.length}`}
        color={userReacted ? "primary" : "grey"}
      />
    </div>
  );
};

Reaction.propTypes = {
  className: PropTypes.string,
  emoji: PropTypes.object,
  reactors: PropTypes.array,
  onClick: PropTypes.func,
  canReact: PropTypes.bool,
  userReacted: PropTypes.bool
};

export { Reaction };
