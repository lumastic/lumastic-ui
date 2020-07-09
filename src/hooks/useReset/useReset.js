import { useReducer } from "react";

const useReset = () => {
  const [reset, toggle] = useReducer(state => !state);

  return [reset, toggle];
};

export { useReset };
