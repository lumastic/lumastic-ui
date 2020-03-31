import { useEffect } from "react";

const useEscape = handler => {
  function handleEscape(e) {
    if (e.key === "Escape") {
      if (handler) handler();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);
};

export default useEscape;
