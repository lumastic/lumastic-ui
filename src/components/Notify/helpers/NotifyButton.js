import React from "react";
import PropTypes from "prop-types";
import { useNotify } from "..";
import { Button } from "../../Button";

const NotifyButton = ({ children, color = "primary", severity = "info" }) => {
  // useNotify() gets access to NotifyCenter context
  // notifyDispatch is it's only value
  const { notifyDispatch } = useNotify();
  const onClick = () => {
    // notfiyDispatch is a reducer that takes an object of two values
    notifyDispatch({
      // type of function ["add", "remove"]
      type: "add",
      // payload of Notify props
      payload: {
        children: `${severity.toUpperCase()} Notification`,
        severity
      }
    });
  };

  return (
    <Button onClick={onClick} variant="contained" color={color}>
      {children}
    </Button>
  );
};

NotifyButton.propTypes = {
  children: PropTypes.node,
  severity: PropTypes.oneOf(["error", "warning", "success", "info"]),
  color: PropTypes.oneOf(["primary", "green", "yellow", "red"])
};

export { NotifyButton };
