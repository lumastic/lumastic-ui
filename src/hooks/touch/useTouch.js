import React, { useState } from "react";

export const useTouch = (start, end, move, cancel, doubleTap) => {
  const [lastTap, setLastTap] = useState(null);
  const DOUBLE_PRESS_DELAY = 300;
  const touchHandler = React.useCallback((handler, e) => {
    if (handler) handler(e);
  }, []);
  const doubleTapHandler = e => {
    const now = Date.now();
    if (lastTap && now - lastTap < DOUBLE_PRESS_DELAY) {
      touchHandler(doubleTap, e);
    } else {
      setLastTap(now);
      touchHandler(start, e);
    }
  };
  const touchBind = React.useMemo(
    () => ({
      onTouchStart: e => doubleTapHandler(e),
      onTouchEnd: e => touchHandler(end, e),
      onTouchMove: e => touchHandler(move, e),
      onTouchCancel: e => touchHandler(cancel, e)
    }),
    [start, end, move, cancel, touchHandler]
  );
  return [touchBind];
};
