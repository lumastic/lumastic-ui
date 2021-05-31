/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import PropTypes from "prop-types";
import React, {
  createElement,
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState
} from "react";
import {
  MenuItem,
  Popup,
  PopupContent,
  PopupMenu,
  PopupTrigger,
  Type
} from "../../components";
import { classNames } from "../../helpers";
import { useInputContext } from "../../hooks";

import style from "./SearchSelect.scss";

const SearchSelectInput = ({
  toggle,
  setTrigger,
  placeholder,
  inputRef,
  disabled,
  onSearch,
  setResults
}) => {
  const searchHandler = useCallback(
    async e => {
      if (onSearch) {
        setResults(await onSearch(e?.target?.value));
      }
      if (e?.target?.value === "" || disabled) {
        toggle(false); // if value in searchSelect is blank, don't show dropdown results
      } else {
        toggle(true); // if value is not blank, show dropdown
      }
    },
    [toggle, setResults, onSearch, disabled]
  );

  const handleEsc = e => {
    if (e.key === "Escape") {
      inputRef?.current?.blur();
      // toggle(false);
    }
  };

  return (
    <div
      className={classNames(style.search, { [style.disabled]: disabled })}
      ref={ref => setTrigger(ref)}
    >
      <input
        type="search"
        placeholder={placeholder}
        ref={inputRef}
        onChange={searchHandler}
        onFocus={searchHandler}
        onKeyDown={handleEsc}
        disabled={disabled}
      />
    </div>
  );
};

const SearchSelect = ({
  name = "searchselect",
  defaultValue = [],
  onChange,
  onSearch,
  resultHandler = result => result,
  className,
  placeholder,
  renderResult,
  renderSelection,
  maxSelected,
  reset
}) => {
  // TODO: useCallback to the searchFunc
  const { register, setValue, errors } = useInputContext();

  const selectReducer = (oldValue, action) => {
    const newVal = [...oldValue];
    const index = newVal.findIndex(
      x => x.id === action?.payload?.id || x.name === action?.payload?.name
    );
    switch (action.type) {
      case "add":
        newVal.push(action?.payload);
        return newVal;
      case "remove":
        newVal.splice(index, 1);
        return newVal;
      case "reset":
        return [];
      default:
        return newVal;
    }
  };

  const [selected, setSelected] = useReducer(selectReducer, defaultValue);

  useEffect(() => {
    if (reset !== undefined && reset !== null) {
      setSelected({ type: "reset" });
    }
  }, [reset]);

  const [results, setResults] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    if (register) register({ name });
  }, [register, name]);

  useEffect(() => {
    if (selected.length > 0 && setValue)
      setValue(name, maxSelected === 1 ? selected?.[0] : selected, true);
  }, [selected, setValue, name, maxSelected]);

  useEffect(() => {
    if (onChange) onChange(selected);
  }, [selected]);

  const clickHandler = useCallback(
    result => {
      setSelected({ type: "add", payload: resultHandler(result) });
      if (inputRef?.current) inputRef.current.value = "";
      if (maxSelected !== selected?.length + 1) {
        inputRef?.current?.focus();
      }
    },
    [setSelected, inputRef, resultHandler, selected, maxSelected]
  );

  return (
    <>
      {/* {errors && errors[name] && (
        <Type caption color="red">
          {errors[name]?.message}
        </Type>
      )} */}
      <div
        className={classNames(style.container, className)}
        // ref={containerRef}
      >
        <Popup
          className={style["popup-container"]}
          anchor={{ v: "bottom", h: "left" }}
          transform={{ v: "top", h: "left" }}
        >
          <div
            className={classNames(style.searchbox, {
              [style.onlyone]: maxSelected === 1
            })}
          >
            <div className={style.selected}>
              {renderSelection &&
                selected?.map((selection, key) => (
                  <div className={style.selection} key={selection?.id || key}>
                    {createElement(renderSelection, {
                      ...selection,
                      onRemove: e => {
                        e?.stopPropagation();
                        setSelected({ type: "remove", payload: selection });
                      }
                    })}
                  </div>
                ))}
            </div>

            <PopupTrigger
              render={SearchSelectInput}
              onSearch={onSearch}
              setResults={setResults}
              placeholder={!(maxSelected === selected?.length) && placeholder}
              inputRef={inputRef}
              disabled={maxSelected && selected?.length >= maxSelected}
            />
          </div>
          <PopupContent
            render={PopupMenu}
            triggerEl={inputRef}
            disablePortal={false}
          >
            {!results?.filter(result => !selected?.includes(result)).length && (
              <Type caption color="grey">
                No results found
              </Type>
            )}
            {renderResult &&
              results
                ?.filter(result => !selected?.includes(result))
                ?.map((result, index) => (
                  <MenuItem
                    className={style.result}
                    key={result?.id || index}
                    onClick={() => clickHandler(result)}
                  >
                    {createElement(renderResult, { ...result })}
                  </MenuItem>
                ))}
          </PopupContent>
        </Popup>
      </div>
    </>
  );
};

export { SearchSelect };
