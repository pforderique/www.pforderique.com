import React from "react";

import ProjectModule from "./ProjectCard";
import "./ProjectGrid.css";
import "../../utilities.css";

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
