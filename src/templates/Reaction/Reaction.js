import React from "react";
import PropTypes from "prop-types";
import style from "./Reaction.scss";
import classNames from "../../helpers/classNames";
import { Emoji } from "../../components/Emoji";
import { Chip } from "../../components/Chip";

const Reaction = ({
  className,
  reaction = {},
  onClick,
  canReact,
  userReacted
}) => {
  const handleClick = () => {
    if (onClick) onClick(reaction.id, !userReacted);
  };
  const handleEnter = e => {
    if (e.keyCode === 13) {
      handleClick();
    }
  };

  return (
    <div
      role="button"
      aria-hidden={!canReact}
      tabIndex={canReact ? 0 : null}
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
          {
            [style.reactable]: canReact
          },
          style.chip
        )}
        symbol={<Emoji emoji={reaction.emoji} className={style.emoji} />}
        label={`${reaction.reactors.length}`}
        color={userReacted ? "primary" : "grey"}
      />
    </div>
  );
};

Reaction.propTypes = {
  className: PropTypes.string,
  reaction: PropTypes.object,
  onClick: PropTypes.func,
  canReact: PropTypes.bool,
  userReacted: PropTypes.bool
};

export { Reaction };
