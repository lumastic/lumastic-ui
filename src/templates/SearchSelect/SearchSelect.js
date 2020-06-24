import PropTypes from "prop-types";
import React, {
  createElement,
  useEffect,
  useReducer,
  useState,
  useRef
} from "react";
import { Chip, Modal } from "../../components";
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
  renderResults
}) => {
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

  return (
    <div className={classNames(style.container)}>
      <div className={style.searchbox}>
        <div className={style.selected}>
          {selected?.map(selection => (
            <Chip
              className={style.selection}
              label="Test"
              onRemove={() => {
                setSelected({ type: "remove", payload: selection });
              }}
            />
          ))}
        </div>
        <div className={style.search}>
          <input
            type="search"
            placeholder="search"
            onChange={searchHandler}
            onFocus={searchHandler}
          />
        </div>
      </div>
      <Modal isShowing={isShowing} disablePortal>
        <div className={style.results} ref={resultsRef}>
          {renderResults &&
            results
              ?.filter(result => !selected?.includes(result))
              ?.map((result, index) => (
                <div
                  className={style.result}
                  key={result?.id || index}
                  onClick={() => setSelected({ type: "add", payload: result })}
                >
                  {createElement(renderResults, { ...result })}
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
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
  name: PropTypes.string,
  renderResults: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
};

export { SearchSelect };
