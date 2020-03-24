import React, { useContext } from "react";
import PropTypes from "prop-types";
import NotifyContext from "../NotifyCenter/NotifyContext";
import { Button } from "../../Button";

const NotifyButton = ({ children, severity = "info" }) => {
  const { notifyDispatch } = useContext(NotifyContext);
  const onClick = () => {
    notifyDispatch({ type: "add", payload: { children: "Test", severity } });
  };

  return (
    <Button onClick={onClick} variant="contained">
      {children}
    </Button>
  );
};

NotifyButton.propTypes = {
  children: PropTypes.node,
  severity: PropTypes.oneOf(["error", "warning", "success", "info"])
};

export { NotifyButton };
