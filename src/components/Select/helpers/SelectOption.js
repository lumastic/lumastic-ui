import React, { useContext } from "react";
import PropTypes from "prop-types";
import style from "../Select.scss";
import SelectContext from "./SelectContext";
import PopupContext from "../../Popup/helpers/PopupContext";

const SelectOption = ({ children, name }) => {
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
      className={style["select-option"]}
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
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export { SelectOption };
