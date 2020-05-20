import React, { useMemo, useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import SelectContext from "./helpers/SelectContext";
import { Popup, PopupContent, PopupTrigger } from "../Popup";
import { SelectOptions } from "./helpers/SelectOptions";
import { SelectOption } from "./helpers/SelectOption";
import { Type } from "../Type";
import { ArrowDown } from "../../icons/ArrowDown";
import classNames from "../../helpers/classNames";
import style from "./Select.scss";

const Select = ({
  defaultValue,
  placeholder,
  name,
  small = false,
  children,
  className,
  onChange,
  onClose,
  onOpen
}) => {
  const { register, setValue, errors } = useFormContext();
  const [selected, setSelected] = useState(defaultValue);
  const [options, setOptions] = useState([]);
  const triggerRef = useRef();

  const contextValue = useMemo(() => ({ selected, setSelected, setOptions }), [
    selected,
    setSelected,
    setOptions
  ]);

  useEffect(() => {
    setSelected(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (register) register({ name });
  }, [register, name]);

  useEffect(() => {
    if (onChange) onChange(selected);
    if (selected && setValue) setValue(name, selected, true);
  }, [selected, onChange, setValue, name]);

  return (
    <>
      {/* <input type="text" hidden name={name} register={register} /> */}
      <SelectContext.Provider value={contextValue}>
        <Popup
          onOpen={onOpen}
          onClose={onClose}
          anchor={{ v: "top", h: "left" }}
          transform={{ v: "top", h: "left" }}
        >
          <PopupTrigger>
            <div
              className={classNames(className, style.select, {
                [style.error]: errors && errors[name]
              })}
              data-testid="select"
              ref={triggerRef}
            >
              {options[selected] || (
                <div className={style.label}>
                  <Type body2={small}>{placeholder}</Type>
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
  defaultValue: PropTypes.any,
  small: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onClose: PropTypes.func,
  onOpen: PropTypes.func
};

export { Select };
