import React, { useState, useEffect } from "react";
import { Router, navigate } from "@reach/router";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import { get, post } from "../utilities.js";
import NavBar from "./modules/Navbar.js";

import "../utilities.css";

/**
 * Define the "App" component
 */
const App = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchType = (event) => setSearchText(event.target.value);

  const onSearch = async () => {
    get("/api/projects", { q: searchText }).then((res) => setProjects(res));
    navigate(`/projects/${searchText}`);
    console.log("searched! -- update projects and goto projects page");
  };

  return (
    <>
      <NavBar onType={handleSearchType} onSearch={onSearch} />
      <Router>
        <Home path="/" />
        <Projects path="/projects/:searchtext" />
        <Projects path="/projects/" searchtext={""} />
        <NotFound default />
      </Router>
    </>
  );
};

export default App;
