import { useEffect } from "react";
import { useDrop } from "./useDragDrop";

// TODO: Add mobile support
// TODO: Add support for scrolling parent while moving
export const useDraggable = ({
  ref,
  onDragStart,
  onDrag,
  onDrop,
  draggingClass,
  disable
} = {}) => {
  const draggableRef = ref;
  const { setDrag } = useDrop();

  useEffect(() => {
    const toDrag = draggableRef.current;
    const parent = toDrag.parentElement;

    const startDrag = ({ clientX, clientY, which }) => {
      // Check left mouse
      if (which !== 1) return;
      // Set Click Position
      const clickPosition = { x: clientX, y: clientY };
      // Click offset
      const clickOffset = {
        x: clickPosition.x - toDrag.getBoundingClientRect().x,
        y: clickPosition.y - toDrag.getBoundingClientRect().y
      };
      // checkDragging checks if the distance of move is great enough to be considered a "drag"
      const checkDragging = e => {
        // Prevent default behavior because move triggers selection and focus
        e.preventDefault();
        // if move is greater than 7px away from click position
        if (
          Math.abs(e.clientX - clickPosition.x) >= 3 ||
          Math.abs(e.clientY - clickPosition.y) >= 3
        ) {
          // Stop checking for a drag (cause it is one)
          document.removeEventListener("mousemove", checkDragging);
          // Set body cursor to show grabbing
          document.body.style.cursor = "grabbing";
          // Create dragging element
          const dragging = toDrag.cloneNode(true);
          dragging.style.left = `${e.clientX - clickOffset.x}px`;
          dragging.style.top = `${e.clientY - clickOffset.y}px`;
          document.body.appendChild(dragging);
          toDrag.style.visibility = "hidden";
          toDrag.classList.add(draggingClass);
          setDrag({ dragging });
          if (onDragStart)
            onDragStart({
              element: toDrag,
              dragElement: dragging,
              clickPosition
            });
          // dragging moves the element on screen and listens for a drop
          let currDroppable = null;
          const drag = dragEvent => {
            // Prevent default behavior because move triggers selection and focus
            dragEvent.preventDefault();
            dragging.classList.add(draggingClass);
            // console.log(e);
            const { clientX: dragX, clientY: dragY } =
              (dragEvent.touches && dragEvent.touches[0]) || dragEvent;
            const translate = {
              x: dragX - clickPosition.x,
              y: dragY - clickPosition.y
            };
            dragging.style.transform = `translate(${translate.x}px, ${translate.y}px)`;
            if (onDrag)
              onDrag({
                element: toDrag,
                dragElement: dragging,
                translate
              });
            // Notify droppables
            dragging.style.visibility = "hidden";
            const elemBelow = document.elementFromPoint(dragX, dragY);
            dragging.style.visibility = null;

            const droppableBelow = elemBelow?.closest(".droppable");

            if (currDroppable !== droppableBelow) {
              setDrag({ dropBelow: droppableBelow });
            }
            currDroppable = droppableBelow;
          };
          // Listen for drop
          const drop = () => {
            // Set position to current dragged position
            const { left, top } = dragging.getBoundingClientRect();
            const {
              top: offsetTop,
              left: offsetLeft
            } = parent.getBoundingClientRect();
            const finalPosition = {
              x: left - offsetLeft,
              y: top - offsetTop
            };
            toDrag.style.top = `${finalPosition.y}px`;
            toDrag.style.left = `${finalPosition.x}px`;
            toDrag.style.visibility = null;
            toDrag.classList.remove(draggingClass);

            // Remove draggable from DOM
            dragging.remove();
            // Remove listeners
            document.removeEventListener("mousemove", drag);
            document.removeEventListener("mouseup", drop);
            document.body.style.cursor = "unset";
            // console.log("Dropped item");
            setDrag({
              dragAction: {
                type: "dropped",
                extras: { translate: finalPosition }
              }
            });
            if (onDrop) onDrop({ element: toDrag, translate: finalPosition });
          };
          // Listen for dragging
          document.addEventListener("mousemove", drag);
          // Listen for drop
          document.addEventListener("mouseup", drop);
        }
      };
      // Listen for move to checkDragging or for mouseUp to cancel
      document.addEventListener("mousemove", checkDragging);
      // Cancel the drag
      const cancelDrag = () => {
        document.removeEventListener("mousemove", checkDragging);
      };
      // Listen for mouseUp to cancel
      document.addEventListener("mouseup", cancelDrag);
    };
    if (!disable) toDrag.addEventListener("mousedown", startDrag);
    // Listen for mouseDown event to check if it's a drag

    // Remove listener on unmount
    return () => {
      toDrag.removeEventListener("mousedown", startDrag);
    };
  }, [
    draggableRef,
    onDragStart,
    onDrag,
    onDrop,
    draggingClass,
    setDrag,
    disable
  ]);
};
