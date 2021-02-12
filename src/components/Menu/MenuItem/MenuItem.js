import React, { useContext } from "react";
import PropTypes from "prop-types";
import style from "./MenuItem.scss";
import classNames from "../../../helpers/classNames";
import PopupContext from "../../Popup/helpers/PopupContext";

const MenuItem = ({ children, className, onClick, active, ...rest }) => {
  const { toggle } = useContext(PopupContext);

  const clickHandler = e => {
    e.stopPropagation();
    if (onClick) onClick(e);
    if (toggle) toggle();
  };

  const handleEnter = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      clickHandler(e);
    }
  };

  return (
    <div
      tabIndex={0}
      role="button"
      className={classNames(className, style.menuitem, {
        [style.active]: active
      })}
      data-testid="menuitem"
      onClick={clickHandler}
      onKeyDown={handleEnter}
      data-active={active}
      {...rest}
    >
      {children}
    </div>
  );
};

MenuItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool
};

export { MenuItem };
