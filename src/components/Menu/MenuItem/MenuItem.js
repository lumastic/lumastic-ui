import React from "react";
import PropTypes from "prop-types";
import style from "./MenuItem.scss";
import classNames from "../../../helpers/classNames";

const MenuItem = ({ children, className, onClick, active, ...rest }) => {
  const handleEnter = e => {
    if (e.keyCode === 13) {
      if (onClick) onClick(e);
    }
  };

  return (
    <div
      tabIndex={0}
      role="button"
      className={classNames(className, style.menuitem)}
      data-testid="menuitem"
      onClick={onClick}
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
