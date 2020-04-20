import React from "react";
import PropTypes from "prop-types";
import style from "./Reactions.scss";
import classNames from "../../helpers/classNames";
import { AddEmoji } from "../AddEmoji/AddEmoji";
import { Reaction } from "../Reaction/Reaction";

const Reactions = ({ className, reactions = [], canReact }) => (
  <>
    {canReact ? <AddEmoji /> : null}
    <div
      className={classNames(className, style.reactions)}
      data-testid="reactions"
    >
      {reactions.map(reaction => (
        <Reaction
          emoji={reaction.emoji}
          reactors={reaction.reactors}
          canReact={canReact}
        />
      ))}
    </div>
  </>
);

Reactions.propTypes = {
  className: PropTypes.string,
  canReact: PropTypes.bool,
  reactions: PropTypes.array
};

export { Reactions };
