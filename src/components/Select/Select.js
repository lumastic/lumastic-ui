import PropTypes from "prop-types";
import React, { Children, useEffect, useMemo, useRef, useState } from "react";
import classNames from "../../helpers/classNames";
import { useInputContext } from "../../helpers/useInputContext";
import { ArrowDown } from "../../icons/ArrowDown";
import { Popup, PopupContent, PopupTrigger } from "../Popup";
import { Type } from "../Type";
import SelectContext from "./helpers/SelectContext";
import { SelectOption } from "./helpers/SelectOption";
import { SelectOptions } from "./helpers/SelectOptions";
import style from "./Select.scss";

const Select = ({
  defaultValue,
  placeholder,
  name = "select",
  small = false,
  compact = false,
  children,
  className,
  onChange,
  onClose,
  onOpen,
  addOption
}) => {
  const { register, setValue, errors } = useInputContext();
  const [selected, setSelected] = useState(defaultValue);
  const [options, setOptions] = useState([]);

  const triggerRef = useRef();

  const contextValue = useMemo(() => ({ selected, setSelected, setOptions }), [
    selected,
    setSelected,
    setOptions
  ]);

  useEffect(() => {
    if (register) register({ name });
  }, [register, name]);

  useEffect(() => {
    if (selected && setValue) setValue(name, selected, true);
    if (selected && !options[selected]) setValue(name, "", true);
  }, [selected, setValue, name, options]);

  useEffect(() => {
    // console.log("Select onchange", selected);
    if (onChange) onChange(selected);
  }, [selected]);

  useEffect(() => {
    // console.log("Select default value", defaultValue);
    setSelected(defaultValue);
  }, [defaultValue]);

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
              <div
                className={classNames(style["select-arrow"], {
                  [style.nomargin]: compact
                })}
              >
                <ArrowDown />
              </div>
            </div>
          </PopupTrigger>
          <PopupContent render={SelectOptions}>
            {Children.map(
              children,
              child =>
                child?.props?.name && (
                  <SelectOption
                    key={child?.props?.name}
                    name={child?.props?.name}
                    compact={compact}
                  >
                    {child?.props?.children}
                  </SelectOption>
                )
            )}
            {addOption}
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
  compact: PropTypes.bool,
  addOption: PropTypes.node,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onClose: PropTypes.func,
  onOpen: PropTypes.func
};

export { Select };
