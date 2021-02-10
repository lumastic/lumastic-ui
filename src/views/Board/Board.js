import PropTypes from "prop-types";
import React from "react";
import { Canvas, Card } from "../../components";
import { BoardCard } from "../../templates";

const Board = ({ mode = "free", ...board }) => (
  <div>
    {board?.cards
      ?.filter(card => !card.archived)
      ?.map((card, index) => (
        <BoardCard key={card?.id || index} card={card} />
      ))}
  </div>
);

Board.propTypes = {
  board: PropTypes.object,
  mode: PropTypes.bool
};

export { Board };
