import React from "react";
import PropTypes from "prop-types";
import { Canvas, Viewport, List } from "../../components";
import { BoardCard } from "../../templates";
import { DragDropProvider } from "../../hooks";
import { useBoard } from "./BoardProvider";
import style from "./Board.scss";
import classNames from "../../helpers/classNames";

const Board = ({ cards = [], mode = "free" }) => (
  <DragDropProvider>
    <Viewport>
      <Canvas>
        {mode === "free" &&
          cards?.map((card, key) => (
            <BoardCard card={card} key={card?.id || key}>
              <BoardCard card={card} key={card?.id || key} block />
            </BoardCard>
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
