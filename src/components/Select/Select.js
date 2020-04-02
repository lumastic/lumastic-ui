import React, { useMemo, useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "../../helpers/classNames";
import SelectContext from "./helpers/SelectContext";
import style from "./Select.scss";
import { Popup, PopupContent, PopupTrigger } from "../Popup";
import { SelectOptions } from "./helpers/SelectOptions";
import { SelectOption } from "./helpers/SelectOption";
import { Type } from "../Type";
import { ArrowDown } from "../../icons/ArrowDown";

const Select = ({
  defaultValue,
  id,
  placeholder,
  name,
  children,
  className,
  onChange,
  onClose,
  onOpen
}) => {
  const [selected, setSelected] = useState(defaultValue);
  const [options, setOptions] = useState([]);
  const triggerRef = useRef();

  const contextValue = useMemo(() => ({ selected, setSelected, setOptions }), [
    selected,
    setSelected,
    setOptions
  ]);

  useEffect(() => {
    if (onChange) onChange(selected);
  }, [selected, onChange]);

  return (
    <>
      <input
        type="hidden"
        id={id}
        name={name}
        value={selected}
        onChange={onChange}
      />
      <SelectContext.Provider value={contextValue}>
        <Popup
          onOpen={onOpen}
          onClose={onClose}
          anchor={{ v: "top", h: "left" }}
          transform={{ v: "top", h: "left" }}
        >
          <PopupTrigger>
            <div
              className={classNames(className, style.select)}
              data-testid="select"
              ref={triggerRef}
            >
              {options[selected] || (
                <div className={style.label}>
                  <Type>{placeholder}</Type>
                </div>
              )}
              <div className={style["select-arrow"]}>
                <ArrowDown />
              </div>
            </div>
          </PopupTrigger>
          <PopupContent render={SelectOptions}>
            {Object.keys(options).map(option => (
              <SelectOption key={option} name={option}>
                {options[option]}
              </SelectOption>
            ))}
          </PopupContent>
        </Popup>
        {children}
      </SelectContext.Provider>
    </>
  );
};

Select.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  children: PropTypes.node,
  defaultValue: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  onClose: PropTypes.func,
  onOpen: PropTypes.func
};

export { Select };
