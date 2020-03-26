import { useState } from "react";

const useModal = (initialShowing = false) => {
  const [isShowing, setIsShowing] = useState(initialShowing);

  function toggle(setShowing = !isShowing) {
    setIsShowing(setShowing);
  }

  return [isShowing, toggle];
};

export default useModal;
