import { useCallback, useEffect, useState } from "react";

export const useOffclick = (refs = [], displayHandler) => {
  const [clickedOff, setClickedOff] = useState(false);

  const handleOffclick = useCallback(
    e => {
      if (!refs[0]?.current || !e.target) return;

      if (!refs.find(ref => ref?.current.contains(e.target))) {
        if (displayHandler) displayHandler(false);

        setClickedOff(true);
      }
    },
    [refs, displayHandler]
  );

  useEffect(() => {
    window.addEventListener("mousedown", handleOffclick);
    window.addEventListener("touchstart", handleOffclick);
    return () => {
      window.removeEventListener("mousedown", handleOffclick);
      window.removeEventListener("touchstart", handleOffclick);
      setClickedOff(false);
    };
  }, []);

  return clickedOff;
};
