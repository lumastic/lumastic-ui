import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import style from "./Notify.scss";
import classNames from "../../helpers/classNames";
import { Alert } from "../Alert";
import NotifyContext from "./NotifyCenter/NotifyContext";
import { IconButton } from "../IconButton";
import { Type } from "../Type";
import { Times } from "../../icons/Times/Times";

const Notify = ({ children, className, severity, id }) => {
  const [mount, setMount] = useState(false);
  const [time, setTime] = useState(0);
  const [stop, setStop] = useState(false);
  const { notifyDispatch } = useContext(NotifyContext);
  useEffect(() => {
    setTimeout(() => {
      setMount(true);
    }, 200);
  }, []);

  useEffect(() => {
    if (mount && !stop) {
      setTimeout(() => {
        setTime(old => old + 25);
      }, 25);
    }
  }, [time, mount, stop]);

  useEffect(() => {
    if (time >= 10000) {
      setMount(false);
      setTimeout(() => {
        notifyDispatch({ type: "remove", payload: id });
      }, 400);
    }
  }, [time, notifyDispatch, id]);

  const stopTimer = () => {
    setStop(true);
  };

  const startTimer = () => {
    setStop(false);
  };

  const close = () => {
    setMount(false);
    setTimeout(() => {
      notifyDispatch({ type: "remove", payload: id });
    }, 400);
  };

  return ReactDOM.createPortal(
    <div
      className={classNames(className, style.notify, { [style.mount]: mount })}
      data-testid="notify"
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
    >
      <Alert variant="filled" severity={severity}>
        <div className={style["notify-content"]}>
          <Type body2 tag="h1" className={style.text}>
            {children}
          </Type>
          <IconButton
            className={style["close-button"]}
            color="light"
            setSize="0.8rem"
            onClick={close}
          >
            <Times />
          </IconButton>
        </div>
      </Alert>
      <hr
        style={{ width: `${(time / 10000) * 100}%` }}
        className={style.progress}
      />
    </div>,
    document.body
  );
};

Notify.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.number,
  severity: PropTypes.oneOf(["error", "warning", "success", "info"])
};

export { Notify };
