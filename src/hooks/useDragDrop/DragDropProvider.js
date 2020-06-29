import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { DragContext, DropContext } from "./DragDropContext";

const DragDropProvider = ({ children }) => {
  const [drag, setDragObject] = useState({
    dragging: false,
    dropBelow: false,
    dragAction: false
  });
  const setDrag = useCallback(
    newObj => {
      setDragObject(old => ({ ...old, ...newObj }));
    },
    [setDragObject]
  );
  return (
    <DragContext.Provider value={{ drag }}>
      <DropContext.Provider value={{ setDrag }}>
        {children}
      </DropContext.Provider>
    </DragContext.Provider>
  );
};

DragDropProvider.propTypes = {
  children: PropTypes.node
};

export { DragDropProvider };
