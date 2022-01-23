import React, { useEffect, useState } from "react";

import "./SearchBar.css";
import "../../utilities.css";

/**
 * The navigation bar at the top of all pages.
 *
 * Proptypes
 * @param {function} onSearch callback when form submitted
 * @param {function} handleSearchType callback
 */
const SearchBar = (props) => {
  return (
    <form className="d-flex ml-auto" onSubmit={props.onSearch}>
      <input
        className="SearchBar-input form-control me-2"
        type="search"
        placeholder="Search Projects"
        aria-label="Search"
        onChange={props.handleSearchType}
      />
      <button className="btn SearchBar-btn" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
