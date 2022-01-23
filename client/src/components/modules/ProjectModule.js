import React from "react";

import "./ProjectModule.css";
import "../../utilities.css";

/**
 * A display module for a single project
 *
 * Proptypes
 * @param {object} project to dislpay
 * @param {string} img of project
 */
const ProjectModule = (props) => {
  const link = `https://drive.google.com/uc?export=view&id=${props.project.driveid}`;

  return (
    <div className="ProjectModule-container">
      <h3 className="u-highlight u-textCenter u-bold">{props.project.title}</h3>
      <img src={link}></img>
    </div>
  );
};

export default ProjectModule;
