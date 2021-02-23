import PropTypes from "prop-types";
import React from "react";
import { Canvas, Viewport } from "../../components";
import { DragDropProvider } from "../../hooks";
import { BoardCard } from "../../templates";

const Board = ({ cards = [], mode = "free" }) => (
  <DragDropProvider>
    <Viewport data-testid="board">
      <Canvas>
        {cards?.map(
          (card, index) =>
            card &&
            !card?.archived && <BoardCard key={card?.id || index} card={card} />
        )}
      </Canvas>
    </Viewport>
  </DragDropProvider>
);

Board.propTypes = {
  cards: PropTypes.array,
  mode: PropTypes.bool
};

export { Board };
