import { useEffect, useState } from "react";

const useOffclick = (ref, displayHandler) => {
  const [clickedOff, setClickedOff] = useState(false);

  function handleOffclick(e) {
    if (!ref.current) return;
    if (!ref.current.contains(e.target)) {
      if (displayHandler) displayHandler(false);
      setClickedOff(true);
    }
  }

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

export default useOffclick;
