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
import { useInputContext } from "../../helpers/useInputContext";
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
  const searchHandler = async e => {
    if (onSearch) {
      setResults(await onSearch(e?.target?.value));
    }
    if (e?.target?.value === "") {
      toggle(false); // if value in searchSelect is blank, don't show dropdown results
    } else {
      toggle(true); // if value is not blank, show dropdown
    }
  };

  const handleEsc = e => {
    if (e.key === "Escape") {
      inputRef?.current?.blur();
      // toggle(false);
    }
  };

  return (
    <div className={style.search} ref={ref => setTrigger(ref)}>
      <input
        type="search"
        placeholder={placeholder}
        ref={inputRef}
        onChange={searchHandler}
        // onFocus={e => searchHandler(e, toggle)}
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
    if (selected && setValue) setValue(name, selected, true);
  }, [selected, setValue, name]);

  useEffect(() => {
    if (onChange) onChange(selected);
  }, [selected]);

  const clickHandler = useCallback(
    result => {
      setSelected({ type: "add", payload: resultHandler(result) });
      if (inputRef?.current) inputRef.current.value = "";
      inputRef?.current?.focus();
    },
    [setSelected, inputRef, resultHandler]
  );

  return (
    <>
      {/* {errors && errors[name] && (
        <Type caption color="red">
          {errors[name]?.message}
        </Type>
      )} */}
      <div className={classNames(style.container, className)}>
        <Popup
          className={style["popup-container"]}
          anchor={{ v: "bottom", h: "left" }}
          transform={{ v: "top", h: "left" }}
        >
          <div className={style.searchbox}>
            <div className={style.selected}>
              {renderSelection &&
                selected?.map((selection, key) => (
                  <div className={style.selection} key={selection?.id || key}>
                    {createElement(renderSelection, {
                      ...selection,
                      onRemove: () => {
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
              placeholder={placeholder}
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

SearchSelect.propTypes = {
  defaultValue: PropTypes.array,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
  resultHandler: PropTypes.func,
  name: PropTypes.string,
  renderResult: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  renderSelection: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  reset: PropTypes.bool,
  maxSelected: PropTypes.number
};

export { SearchSelect };
