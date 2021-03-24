import { useFormContext } from "react-hook-form";

export const useInputContext = () => {
  let context = useFormContext();
  if (!context) {
    context = {};
  }
  return context;
};
