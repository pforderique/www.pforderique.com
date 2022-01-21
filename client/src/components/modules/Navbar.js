import { Link } from "@reach/router";
import React from "react";

import logo from "../../public/logo.png";
import SearchBar from "./SearchBar";
import "./NavBar.css";

/**
 * The navigation bar at the top of all pages.
 */

const NavBar = (props) => {
  return (
    <nav class="NavBar-container navbar navbar-expand-lg">
      <img src={logo} className="NavBar-logo"></img>
      <a class="NavBar-title navbar-brand" href="{{url_for('views.home')}}">
        pforderique
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="NavBar-leftside">
          <ul class="navbar-nav mr-auto">
            <li class="NavBar-item nav-item">
              <Link to="/" className="NavBar-link">
                Home
              </Link>
            </li>
            <li class="NavBar-item nav-item">
              <Link to="/projects" className="NavBar-link">
                Projects
              </Link>
            </li>
            <li class="NavBar-item nav-item">
              <Link to="/resume" className="NavBar-link">
                Resume
              </Link>
            </li>
          </ul>
        </div>
        <form
          class="NavBar-input d-flex ml-auto"
          action="{{url_for('views.projects')}}"
        >
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search Projects"
            aria-label="Search"
            name="name"
          />
          <button class="btn btn-outline-secondary" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );

  // return (
  //   <nav className="NavBar-container">
  //     <div className="NavBar-leftside">
  //       <img src={logo} className="NavBar-logo"></img>
  //       <div className="NavBar-title u-bold">pforderique</div>
  //       <div className="NavBar-linkContainer">
  //         <Link to="/" className="NavBar-link">
  //           Home
  //         </Link>
  //         <Link to="/projects" className="NavBar-link">
  //           Projects
  //         </Link>
  //         <Link to="/resume" className="NavBar-link">
  //           Resume
  //         </Link>
  //       </div>
  //     </div>

  //     <SearchBar
  //       handleSearchType={props.handleSearchType}
  //       onSearch={props.onSearch}
  //     />
  //   </nav>
  // );
};

export default NavBar;
