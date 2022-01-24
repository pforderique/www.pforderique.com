import React, { useEffect, useState } from "react";
import { Router, navigate } from "@reach/router";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import ResumePage from "./pages/ResumePage";
import SingleProject from "./pages/SingleProject";
import { get } from "../utilities.js";
import NavBar from "./modules/Navbar.js";

import "../utilities.css";

/**
 * Define the "App" component
 */
const App = () => {
  const [searchText, setSearchText] = useState("");
  const [profileinfo, setProfile] = useState(undefined);

  useEffect(() => {
    get("/api/profile").then((profile) => setProfile(profile));
  }, []);

  const handleSearchType = (event) => setSearchText(event.target.value);

  const onSearch = async () => {
    get("/api/projects", { q: searchText }).then((res) => setProjects(res));
    navigate(`/projects/${searchText}`);
  };

  return (
    <>
      <NavBar onType={handleSearchType} onSearch={onSearch} />
      <Router>
        <Home path="/" profileinfo={profileinfo} />
        <Home path="home" profileinfo={profileinfo} />
        <Projects path="/projects/:searchtext" />
        <Projects path="/projects/" searchtext={""} />
        <SingleProject path="/project/:projectid" />
        {profileinfo && (
          <ResumePage path="/resume" driveid={profileinfo.resumedriveid} />
        )}
        <NotFound default />
      </Router>
    </>
  );
};

export default App;
