import React, { useEffect, useState } from "react";

import { get } from "../../utilities.js";
import Loading from "../modules/Loading";
import ProjectGrid from "../modules/ProjectGrid";
import "../../utilities.css";

const Projects = (props) => {
  const [projects, setProjects] = useState(undefined);

  useEffect(() => {
    get("/api/projects", { q: props.searchtext }).then((res) => {
      setProjects(res);
    });
  }, []);

  if (projects === undefined) return <Loading />;

  if (projects.length === 0)
    return (
      <div className="u-main-container u-textCenter">
        No projects found. Try a different query. Click{" "}
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">here</a> for a
        polynomial-time algorithm of the Halting Problem
      </div>
    );

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
