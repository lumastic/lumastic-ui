import React, { useState } from "react";
import PropTypes from "prop-types";
import { DragDropContext } from "./DragDropContext";

const DragDropProvider = ({ children }) => {
  const [dragging, setDragging] = useState(false);
  const [dropBelow, setDropBelow] = useState(false);
  const [dragAction, setDragAction] = useState(false);

  return (
    <DragDropContext.Provider
      value={{
        dragging,
        setDragging,
        dropBelow,
        setDropBelow,
        dragAction,
        setDragAction
      }}
    >
      {children}
    </DragDropContext.Provider>
  );
};

DragDropProvider.propTypes = {
  children: PropTypes.node
};

export { DragDropProvider };
