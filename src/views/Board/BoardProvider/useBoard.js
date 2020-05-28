import { useContext } from "react";
import { BoardContext } from "./BoardContext";

export const useBoard = () => {
  let context = useContext(BoardContext);
  if (!context) {
    context = {};
  }
  return context;
};
