import { useEffect, useState } from "react";
import { useDrag, useDrop } from "./useDragDrop";

export const useDroppable = ({
  ref,
  disable,
  onDragEnter,
  onDragLeave,
  onDrop
} = {}) => {
  const dropRef = ref;
  const { drag = {} } = useDrag();
  const { setDrag } = useDrop();
  const [oldBelow, setOldBelow] = useState();
  useEffect(() => {
    if (disable) return;
    const { dragging, dropBelow, dragAction } = drag;
    // console.log(dragAction);
    const droppable = dropRef.current;
    // If something is being dragged and they are
    if (dragging && dropBelow) {
      // console.log(oldBelow, dropBelow);
      if (dragAction.type === "dropped" && dropBelow === droppable) {
        // console.log("dropped", droppable);
        setDrag({ dragging: false, dragAction: false, dropBelow: false });
        setOldBelow(false);
        if (onDrop) onDrop({ element: dragging, extras: dragAction.extras });
        return;
      }
      if (oldBelow === droppable && dropBelow !== droppable) {
        // console.log("leave", droppable);
        if (onDragLeave)
          onDragLeave({ element: dragging, extras: dragAction.extras });
      } else if (oldBelow !== droppable && dropBelow === droppable) {
        // console.log("enter", droppable);
        if (onDragEnter)
          onDragEnter({ element: dragging, extras: dragAction.extras });
      }
      setOldBelow(dropBelow);
    }
  }, [
    dropRef,
    drag,
    setDrag,
    onDragEnter,
    onDragLeave,
    onDrop,
    disable,
    oldBelow,
    setOldBelow
  ]);
};
