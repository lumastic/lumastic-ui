import { useContext } from "react";
import { DragDropContext } from "./DragDropContext";

export const useDragDrop = () => {
  let context = useContext(DragDropContext);
  if (!context) {
    context = {};
  }
  return context;
};
