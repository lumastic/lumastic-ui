import React, { useContext } from "react";
import PropTypes from "prop-types";
import style from "../Select.scss";
import SelectContext from "./SelectContext";
import PopupContext from "../../Popup/helpers/PopupContext";
import classNames from "../../../helpers/classNames";

const SelectOption = ({ children, name, compact }) => {
  const { setSelected, selected } = useContext(SelectContext);
  const { toggle } = useContext(PopupContext);

  const changeSelected = () => {
    if (setSelected) setSelected(name);
    if (toggle) toggle();
  };

  const handleEnter = e => {
    if (e.keyCode === 13) {
      changeSelected();
    }
  };

  return (
    <div
      role="option"
      aria-selected={selected === name}
      className={classNames(style["select-option"], {
        [style.compact]: compact
      })}
      onClick={changeSelected}
      onKeyDown={handleEnter}
      tabIndex={0}
    >
      {children}
    </div>
  );
};

SelectOption.propTypes = {
  children: PropTypes.node,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  compact: PropTypes.bool
};

export { SelectOption };
