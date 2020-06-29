import { useReducer } from "react";
import { calcPixelString } from "../helpers";
import useModal from "./useModal";

export const useRightClick = () => {
  // Right Click Handlers
  const [rightClickShowing, toggleRightClick] = useModal(false, true);
  const [rightClickPosition, setRightClickPosition] = useReducer(
    (state, action) => ({
      left: calcPixelString(action.x),
      top: calcPixelString(action.y)
    }),
    { left: calcPixelString(0), top: calcPixelString(0) }
  );

  return {
    rightClickShowing,
    toggleRightClick,
    rightClickPosition,
    setRightClickPosition
  };
};
