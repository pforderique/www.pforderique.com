import React, { useEffect, useState } from "react";

import { get } from "../../utilities.js";
import Loading from "../modules/Loading";
import ProjectGrid from "../modules/ProjectGrid";
import "../../utilities.css";

const Projects = (props) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    get("/api/projects", { q: props.searchtext }).then((res) =>
      setProjects(res)
    );
  }, []);

  if (projects.length === 0) return <Loading />;

  return (
    <>
      <div className="u-main-container">
        <h3 className="u-textCenter u-bold">Projects</h3>
        <ProjectGrid projects={projects} />
      </div>
    </>
  );
};

export default Projects;
