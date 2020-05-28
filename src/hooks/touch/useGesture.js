import { useEffect, useState } from "react";

export const useGesture = (ref, options) => {
  const [swipeLeft, setSwipeLeft] = useState(null);
  const [swipeRight, setSwipeRight] = useState(null);
  const [firstTouch, setFirstTouch] = useState(null);

  const handleTouchStart = e => {
    setFirstTouch({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const handleReset = () => {
    setSwipeLeft(false);
    setSwipeRight(false);
  };

  const handleTouchEnd = e => {
    handleReset();
  };

  useEffect(() => {
    let el = window;
    if (ref && ref.current) {
      el = ref.current;
    }
    if (!el) return;
    const handleTouchMove = e => {
      if (e.touches[0].clientX > firstTouch.x + 30) {
        if (options.maxStartForRightSwipe) {
          if (firstTouch.x < options.maxStartForRightSwipe) {
            setSwipeRight(true);
          }
        } else {
          setSwipeRight(true);
        }
      }
      if (e.touches[0].clientX < firstTouch.x - 30) {
        if (options.maxStartForLeftSwipe) {
          if (firstTouch.x < options.maxStartForLeftSwipe) {
            setSwipeLeft(true);
          }
        } else {
          setSwipeLeft(true);
        }
      }
    };
    el.addEventListener("touchstart", handleTouchStart);
    el.addEventListener("touchmove", handleTouchMove);
    el.addEventListener("touchend", handleTouchEnd);
    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
      el.removeEventListener("touchend", handleTouchEnd);
      handleReset();
    };
  }, [firstTouch]);

  return [swipeLeft, swipeRight];
};
