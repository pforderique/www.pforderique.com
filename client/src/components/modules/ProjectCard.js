import React from "react";
import { navigate } from "@reach/router";

import { fetchImage } from "../../utilities.js";

import "./ProjectModule.css";
import "../../utilities.css";

/**
 * A display module for a single project
 *
 * Proptypes
 * @param {object} project to display
 */
const ProjectModule = (props) => {

  return (
    <div
      className="ProjectModule-container u-fadeDown"
      onClick={() => navigate(`/project/${props.project.id}`)}
    >
      <h3 className="u-highlight u-textCenter u-bold">{props.project.title}</h3>
      <img src={fetchImage(props.project.image)} alt="project image" />
      <section className="ProjectModule-details">
        <div>
          <span className="u-bold">Year: </span>
          {props.project.date}
        </div>
        <div>
          <em>{props.project.category}</em>
        </div>
      </section>
      <section className="ProjectModule-des">
        {props.project.shortDes + " See more "}
        <a href={props.project.link}>here</a>.
      </section>
    </div>
  );
};

export default ProjectModule;
