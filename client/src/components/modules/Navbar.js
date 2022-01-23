import { Link } from "@reach/router";
import React from "react";

import logo from "../../public/logo.png";
import SearchBar from "./SearchBar";
import "./NavBar.css";
import "../../utilities.css";

/**
 * The navigation bar at the top of all pages.
 */

const NavBar = (props) => {
  return (
    <nav className="NavBar-container navbar navbar-expand-lg navbar-dark">
      <a className="NavBar-title navbar-brand">
        <img src={logo} className="NavBar-logo" />
        pforderique
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="NavBar-leftside">
          <ul className="navbar-nav mr-auto">
            <Link to="/" className="NavBar-link">
              Home
            </Link>
            <Link to="/projects" className="NavBar-link">
              Projects
            </Link>
            <Link to="/resume" className="NavBar-link">
              Resume
            </Link>
          </ul>
        </div>
        <SearchBar
          handleSearchType={props.handleSearchType}
          onSearch={props.onSearch}
        />
      </div>
    </nav>
  );
};

export default NavBar;
