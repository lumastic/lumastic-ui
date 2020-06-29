import { useContext } from "react";
import { DropContext, DragContext } from "./DragDropContext";

export const useDrag = () => {
  let context = useContext(DragContext);
  if (!context) {
    context = {};
  }
  return context;
};

export const useDrop = () => {
  let context = useContext(DropContext);
  if (!context) {
    context = {};
  }
  return context;
};
