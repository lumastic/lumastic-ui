import PropTypes from "prop-types";
import React from "react";
import {
  Canvas,
  Viewport,
  Type,
  Link,
  Avatar,
  Breadcrumbs
} from "../../components";
import { DragDropProvider } from "../../hooks";
import { profileRoute } from "../../routes";
import { BoardCard } from "../../templates";

const Board = ({ board = {}, mode = "free" }) => (
  <DragDropProvider>
    <Viewport>
      <Breadcrumbs>
        <Link to={profileRoute(board?.spark?.belongsTo?.name)} inline>
          <Avatar size="big" src={board?.spark?.belongsTo?.avatarURL} />
        </Link>
        <Link
          to={profileRoute(board?.spark?.belongsTo?.name, board?.spark?.id)}
          inline
        >
          <Type h4>{board?.spark?.title}</Type>
        </Link>
        <Type h4>{board?.name}</Type>
      </Breadcrumbs>

      <Canvas>
        {board?.cards
          ?.filter(card => !card.archived)
          ?.map((card, index) => (
            <BoardCard key={card?.id || index} card={card} />
          ))}
      </Canvas>
    </Viewport>
  </DragDropProvider>
);

Board.propTypes = {
  board: PropTypes.object,
  mode: PropTypes.bool
};

export { Board };
