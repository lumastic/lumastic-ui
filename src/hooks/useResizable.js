import { useEffect } from "react";
import { calcPixelString } from "../helpers";

export const useResizable = ({
  ref,
  handle,
  onResizeStart,
  onResize,
  onResizeEnd
} = {}) => {
  const resizableRef = ref;
  const handleRef = handle;
  useEffect(() => {
    const resizable = resizableRef.current;
    const resizeHandle = handleRef.current;
    const startResize = e => {
      if (e.which !== 1) return;
      e.preventDefault();
      e.stopPropagation();
      const clickPosition = { x: e.clientX, y: e.clientY };
      const {
        width: resizableWidth,
        height: resizableHeight
      } = resizable.getBoundingClientRect();
      if (onResizeStart)
        onResizeStart({
          element: resizable,
          clickPosition,
          message: "Resize started"
        });
      const resize = resizeEvent => {
        resizeEvent.preventDefault();
        const newWidth =
          resizableWidth + (resizeEvent.clientX - clickPosition.x);
        const newHeight =
          resizableHeight + (resizeEvent.clientY - clickPosition.y);
        resizable.style.width = calcPixelString(newWidth);
        resizable.style.height = calcPixelString(newHeight);
        if (onResize)
          onResize({
            element: resizable,
            dimension: { width: newWidth, height: newHeight },
            message: "Resizing"
          });
      };
      document.addEventListener("mousemove", resize);
      const endResize = () => {
        document.removeEventListener("mousemove", resize);
        const { width, height } = resizable.getBoundingClientRect();
        if (onResizeEnd)
          onResizeEnd({
            element: resizable,
            dimension: { width, height },
            message: "Resize ended"
          });
      };
      // Listen for mouseUp to cancel
      document.addEventListener("mouseup", endResize);
    };
    resizeHandle.addEventListener("mousedown", startResize);
    return () => resizeHandle.removeEventListener("mousedown", startResize);
  }, [resizableRef, handleRef, onResizeStart, onResize, onResizeEnd]);
};
