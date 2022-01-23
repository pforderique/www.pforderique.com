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
      <section className="ProjectModule-details">
        <div>
          <span className="u-bold">Date: </span>
          {props.project.date}
        </div>
        <div>
          <span className="u-bold">Views: </span>
          {props.project.views}
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
