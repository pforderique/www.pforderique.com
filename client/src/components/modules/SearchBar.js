import { Link } from "@reach/router";
import React, { useEffect, useState } from "react";

import "./SearchBar.css";
import "../../utilities.css";

/**
 * The navigation bar at the top of all pages.
 */
const SearchBar = (props) => {
  return (
    <form className="NavBar-input d-flex ml-auto" onSubmit={props.onSearch}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search Projects"
        aria-label="Search"
        name="name"
        onChange={props.handleSearchType}
      />
      <button className="SearchBar-btn btn" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
