import React from "react";

import ProjectModule from "./ProjectModule";
import "./ProjectGrid.css";
import "../../utilities.css";

// import pathfinder from "../../public/projectimages/pathfinder.jpg"

/**
 * The Project Grid to display project modules
 *
 * Proptypes
 * @param {array} projects list of projects to display
 */
const ProjectGrid = (props) => {
  return (
    <div className="ProjectGrid-grid">
      {props.projects.map((project, idx) => {
        const link = `_${project.title.toLowerCase().replace(/-|\s+/g, "")}`;
        return <ProjectModule key={`key_${idx}`} project={project} />;
      })}
    </div>
  );
};

export default ProjectGrid;
