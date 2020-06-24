import PropTypes from "prop-types";
import React, {
  cloneElement,
  useEffect,
  useReducer,
  useState,
  createElement
} from "react";
import { Chip, Modal } from "../../components";
import { useInputContext } from "../../helpers/useInputContext";
import { classNames } from "../../helpers";
import style from "./SearchSelect.scss";
import useModal from "../../hooks/useModal";

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
        if (newVal.length > 1) {
          newVal.splice(index, 1);
        }
        return newVal;
      default:
        return newVal;
    }
  };

  const [selected, setSelected] = useReducer(selectReducer, defaultValue);

  const [results, setResults] = useState([]);

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

  useEffect(() => {
    if (register) register({ name });
  }, [register, name]);

  useEffect(() => {
    if (selected && setValue) setValue(name, selected, true);
  }, [selected, setValue, name]);

  useEffect(() => {
    if (onChange) onChange(selected);
  }, [selected]);

  return (
    <div className={classNames(style.container)}>
      <div className={style.searchbox}>
        <div className={style.selected}>
          {selected?.map(selection => (
            <Chip
              label="Test"
              onRemove={() =>
                setSelected({ type: "remove", payload: selection })
              }
            />
          ))}
        </div>
        <div className={style.search}>
          <input type="text" placeholder="search" onChange={searchHandler} />
        </div>
      </div>
      <Modal isShowing={isShowing} disablePortal>
        <div className={style.results}>
          {renderResults &&
            results?.map((result, index) => (
              <div className={style.result} key={result?.id || index}>
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
