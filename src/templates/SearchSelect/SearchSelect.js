/* eslint-disable no-unused-expressions */
import PropTypes from "prop-types";
import React, {
  createElement,
  useEffect,
  useReducer,
  useRef,
  useState
} from "react";
import { Modal } from "../../components";
import { classNames } from "../../helpers";
import { useInputContext } from "../../helpers/useInputContext";
import { useOffclick } from "../../hooks";
import useModal from "../../hooks/useModal";
import style from "./SearchSelect.scss";

const SearchSelect = ({
  name = "searchselect",
  defaultValue = [],
  onChange,
  onSearch,
  className,
  placeholder,
  renderResult,
  renderSelection
}) => {
  // TODO: useCallback to the searchFunc
  const { register, setValue, errors } = useInputContext();

  const [isShowing, toggle] = useModal();

  const selectReducer = (oldValue, action) => {
    const newVal = [...oldValue];
    const index = newVal.findIndex(x => x.id === action?.payload?.id);

    switch (action.type) {
      case "add":
        newVal.push(action?.payload);
        return newVal;
      case "remove":
        newVal.splice(index, 1);
        return newVal;
      default:
        return newVal;
    }
  };

  const [selected, setSelected] = useReducer(selectReducer, defaultValue);

  const [results, setResults] = useState([]);
  const resultsRef = useRef();
  const inputRef = useRef();

  useOffclick(resultsRef, toggle);

  useEffect(() => {
    if (register) register({ name });
  }, [register, name]);

  useEffect(() => {
    if (selected && setValue) setValue(name, selected, true);
  }, [selected, setValue, name]);

  useEffect(() => {
    if (onChange) onChange(selected);
  }, [selected]);

  const searchHandler = e => {
    if (onSearch) {
      setResults(onSearch(e?.target?.value));
    }
    if (e?.target?.value === "") {
      toggle(false);
    } else {
      toggle(true);
    }
  };

  const clickHandler = result => {
    setSelected({ type: "add", payload: result });
    inputRef?.current?.focus();
  };

  const handleEnter = (e, result) => {
    if (e.key === "Escape") {
      toggle(false);
    }
    if (e.keyCode === 13) {
      clickHandler(result);
    }
  };

  const handleEsc = e => {
    if (e.key === "Escape") {
      inputRef?.current?.blur();
      toggle(false);
    }
  };

  return (
    <div className={classNames(style.container, className)}>
      <div className={style.searchbox}>
        <div className={style.selected}>
          {renderSelection &&
            selected?.map(selection => (
              <div className={style.selection}>
                {createElement(renderSelection, {
                  ...selection,
                  onRemove: () => {
                    setSelected({ type: "remove", payload: selection });
                  }
                })}
              </div>
            ))}
        </div>
        <div className={style.search}>
          <input
            type="search"
            placeholder={placeholder}
            ref={inputRef}
            onChange={searchHandler}
            onFocus={searchHandler}
            onKeyDown={handleEsc}
          />
        </div>
      </div>
      <Modal isShowing={isShowing} disablePortal>
        <div className={style.results} ref={resultsRef}>
          {renderResult &&
            results
              ?.filter(result => !selected?.includes(result))
              ?.map((result, index) => (
                <div
                  className={style.result}
                  key={result?.id || index}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => handleEnter(e, result)}
                  onClick={() => clickHandler(result)}
                >
                  {createElement(renderResult, { ...result })}
                </div>
              ))}
        </div>
      </Modal>
    </div>
  );
};

SearchSelect.propTypes = {
  defaultValue: PropTypes.array,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
  name: PropTypes.string,
  renderResult: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  renderSelection: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
};

export { SearchSelect };