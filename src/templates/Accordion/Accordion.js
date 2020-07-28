import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";
import classNames from "../../helpers/classNames";
import useModal from "../../hooks/useModal";
import { IconButton } from "../../components";
import { Gear, Chevron } from "../../icons";
import style from "./Accordion.scss";

const AccordionContext = createContext({});

const Accordion = ({ children }) => {
  const [isShowing, toggle] = useModal();

  return (
    <AccordionContext.Provider value={{ isShowing, toggle }}>
      {children}
    </AccordionContext.Provider>
  );
};

const AccordionTrigger = ({ children, className }) => {
  const { isShowing, toggle } = useContext(AccordionContext);
  const onClick = e => {
    e.stopPropagation();
    toggle();
  };
  return (
    <div className={classNames(style.trigger, className)}>
      <div className={style.text}>{children}</div>
      <div className={classNames(style.button, { [style.rotate]: isShowing })}>
        <IconButton onClick={onClick} size="small" color="grey">
          <Chevron />
        </IconButton>
      </div>
    </div>
  );
};

const AccordionContent = ({ children, className }) => {
  const { isShowing } = useContext(AccordionContext);
  if (isShowing) {
    return (
      <div className={classNames(style.content, className)}>{children}</div>
    );
  }
  return null;
};

Accordion.propTypes = {
  children: PropTypes.node
};

AccordionContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

AccordionTrigger.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
export { Accordion, AccordionTrigger, AccordionContent };
