import PropTypes from "prop-types";
import React, { useState } from "react";
import { Search } from "../../components";

const SearchForm = ({ className, onSearch, placeholder }) => {
  const [searchString, setSearchString] = useState("");
  const handleValueChange = e => {
    setSearchString(e.target.value);
  };
  const searchHandler = e => {
    e.preventDefault();
    if (onSearch) onSearch(searchString);
  };
  return (
    <form
      onSubmit={searchHandler}
      className={className}
      data-testid="searchform"
    >
      <Search onChange={handleValueChange} placeholder={placeholder} />
    </form>
  );
};

SearchForm.propTypes = {
  className: PropTypes.string,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string
};

export { SearchForm };
