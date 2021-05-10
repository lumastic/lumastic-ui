import { useCallback, useEffect } from "react";

export const useOffclick = (refs = [], displayHandler) => {
  const handleOffclick = useCallback(
    e => {
      if (!refs[0]?.current || !e.target) return;
      if (!refs.find(ref => ref?.current.contains(e.target))) {
        if (displayHandler) displayHandler(false);
      }
    },
    [refs, displayHandler]
  );

  useEffect(() => {
    window.addEventListener("click", handleOffclick);
    return () => {
      window.removeEventListener("click", handleOffclick);
    };
  }, []);
};
