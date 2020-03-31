import React, { useContext } from "react";
import useEscape from "../../../hooks/useEscape";
import PopupContext from "./PopupContext";

const PopupEscape = () => {
  const { toggle } = useContext(PopupContext);
  const escape = () => {
    toggle(false);
  };
  useEscape(escape);
  return <div hidden />;
};

export { PopupEscape };
