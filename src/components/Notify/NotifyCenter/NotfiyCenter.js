import PropTypes from "prop-types";
import React, { useReducer, useMemo } from "react";
import NotifyContext from "./NotifyContext";
import { Notify } from "../Notify";

const NotifyCenter = ({ children, initialNotifications = [] }) => {
  const notifyReducer = (state, action) => {
    switch (action.type) {
      case "add":
        return state.concat({ id: Date.now(), ...action.payload });
      case "remove":
        return state.filter(n => n.id !== action.payload);
      default:
        return state;
    }
  };

  const [notifications, notifyDispatch] = useReducer(
    notifyReducer,
    initialNotifications
  );

  const notifyCenterValue = useMemo(() => ({ notifyDispatch }), [
    notifyDispatch
  ]);

  return (
    <NotifyContext.Provider value={notifyCenterValue}>
      {children}
      {notifications.map(notification => (
        <Notify key={notification.id} {...notification} />
      ))}
    </NotifyContext.Provider>
  );
};

NotifyCenter.propTypes = {
  children: PropTypes.node,
  initialNotifications: PropTypes.array
};

export { NotifyCenter };
