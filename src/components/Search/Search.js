import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { MagnifyingGlass } from "../../icons/MagnifyingGlass";
import classNames from "../../helpers/classNames";
import style from "./Search.scss";

const Search = ({
  name,
  value,
  id,
  placeholder = "Search...",
  className,
  onChange,
  ...rest
}) => {
  const ref = useRef();

  const handleEsc = e => {
    if (e.key === "Escape") {
      ref.current.blur();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div
      className={classNames(className, style["search-container"])}
      data-testid="search"
    >
      <div className={style["search-icon"]}>
        <MagnifyingGlass />
      </div>
      <input
        type="search"
        name={name}
        value={value}
        id={id}
        ref={ref}
        placeholder={placeholder}
        className={style.search}
        onChange={onChange}
        spellCheck
        {...rest}
      />
    </div>
  );
};

Search.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func
};

export { Search };
