import React from "react";
import PropTypes from "prop-types";
import style from "./Reactions.scss";
import classNames from "../../helpers/classNames";
import { AddEmoji } from "../AddEmoji/AddEmoji";
import { Reaction } from "../Reaction/Reaction";
import recommendReactions from "./helpers/recommendReactions.json";

const Reactions = ({
  className,
  reactions = [],
  reactionHandler,
  canReact
}) => (
  <div
    className={classNames(className, style.reactions)}
    data-testid="reactions"
  >
    {reactions.map(reaction => (
      <Reaction
        reaction={reaction}
        onClick={(id, shouldReact) => reactionHandler(id, shouldReact)}
        canReact={canReact}
      />
    ))}
    {canReact ? <AddEmoji recommended={recommendReactions} /> : null}
  </div>
);

Reactions.propTypes = {
  className: PropTypes.string,
  canReact: PropTypes.bool,
  reactions: PropTypes.array,
  reactionHandler: PropTypes.func
};

export { Reactions };
