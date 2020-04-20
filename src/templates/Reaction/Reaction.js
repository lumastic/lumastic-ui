import React from "react";
import PropTypes from "prop-types";
import style from "./Reaction.scss";
import classNames from "../../helpers/classNames";
import { Emoji } from "../../components/Emoji";
import { Chip } from "../../components/Chip";

const Reaction = ({ className, emoji, reactors }) => (
  <div className={classNames(className, style.reaction)} data-testid="reaction">
    <Chip
      symbol={<Emoji emoji={emoji} className={style.emoji} />}
      label={`${reactors.length}`}
      color="grey"
    />
  </div>
);

Reaction.propTypes = {
  className: PropTypes.string,
  emoji: PropTypes.object,
  reactors: PropTypes.array
};

export { Reaction };
