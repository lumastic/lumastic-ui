import PropTypes from "prop-types";
import React, { useReducer, useMemo, useState } from "react";
import NotifyContext from "./NotifyContext";
import { Notify } from "..";
import { Modal } from "../../Modal";
import style from "./NotifyCenter.scss";

const NotifyCenter = ({ children, initialNotifications = [] }) => {
  const notifyReducer = (state, action) => {
    switch (action.type) {
      case "add":
        return state.concat({ id: Date.now(), ...action.props });
      case "remove":
        return state.filter(n => n.id !== action.id);
      default:
        return state;
    }
  };

  const [notifications, notifyDispatch] = useReducer(
    notifyReducer,
    initialNotifications
  );
  const [newUnread, setNewUnread] = useState(false);

  const notifyCenterValue = useMemo(
    () => ({ notifyDispatch, newUnread, setNewUnread }),
    [notifyDispatch, newUnread, setNewUnread]
  );

  return (
    <NotifyContext.Provider value={notifyCenterValue}>
      {children}
      <Modal isShowing={notifications.length > 0}>
        <div className={style["notify-center"]}>
          {notifications.map(notification => (
            <Notify key={notification.id} {...notification} />
          ))}
        </div>
      </Modal>
    </NotifyContext.Provider>
  );
};

NotifyCenter.propTypes = {
  children: PropTypes.node,
  initialNotifications: PropTypes.array
};

export { NotifyCenter };
