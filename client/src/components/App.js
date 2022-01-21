import React, { useState, useEffect } from "react";
import { Router, navigate } from "@reach/router";

import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound.js";
import { get, post } from "../utilities.js";
import NavBar from "./modules/Navbar.js";

import "../utilities.css";

/**
 * Define the "App" component
 */
const App = () => {
  const [searchText, setSearchText] = useState("");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // load in the icon js
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/ecfdf53d85.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  const handleSearchType = (event) => setSearchText(event.target.value);

  const onSearch = async () => {
    setProjects(searchText);
    console.log("searched! -- update projects and goto projects page");
  };

  return (
    <>
      <NavBar onType={handleSearchType} onSearch={onSearch} />
      <Router>
        <Home path="/" />
        <NotFound default />
      </Router>
    </>
  );
};

export default App;
