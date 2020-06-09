import PropTypes from "prop-types";
import React from "react";
import { Canvas, List, Viewport } from "../../components";
import { DragDropProvider } from "../../hooks";
import { BoardCard } from "../../templates";

const Board = ({ cards = [], mode = "free" }) => (
  <DragDropProvider>
    <Viewport>
      <Canvas>
        {mode === "free" &&
          cards?.map((card, key) => (
            <BoardCard card={card} key={card?.id || key} />
          ))}
        {mode === "list" && (
          <List>
            {cards?.map((card, key) => (
              <BoardCard card={card} key={card?.id || key} block />
            ))}
          </List>
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
