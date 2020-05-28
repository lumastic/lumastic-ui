import { useEffect } from "react";
import { useDragDrop } from "./useDragDrop";

export const useDroppable = ({
  ref,
  onDragEnter,
  onDragLeave,
  onDrop
} = {}) => {
  const dropRef = ref;
  const { dragging, dropBelow, dragAction } = useDragDrop();
  useEffect(() => {
    const droppable = dropRef.current;
    // If something is being dragged and they are
    // console.log(dragging, dropBelow, droppable);
    if (dragging && dropBelow && dropBelow === droppable) {
      switch (dragAction.type) {
        case "enter":
          // console.log("enter");
          if (onDragEnter)
            onDragEnter({ element: dragging, extras: dragAction.extras });
          break;
        case "leave":
          // console.log("leave");
          if (onDragLeave)
            onDragLeave({ element: dragging, extras: dragAction.extras });
          break;
        case "dropped":
          // console.log("dropped");
          if (onDrop) onDrop({ element: dragging, extras: dragAction.extras });
          break;
        default:
          break;
      }
    }
  }, [
    dropRef,
    dragging,
    dropBelow,
    dragAction,
    onDragEnter,
    onDragLeave,
    onDrop
  ]);
};
