import React from "react";

import "./Experience.css";
import "../../utilities.css";

/**
 * An experience module for one job
 *
 * Proptypes
 * @param {object} exp to show
 * @param {object} images containg all image links
 */
const Experience = (props) => {
  const link = `_${props.exp.company.toLowerCase().replace(/\s+/g, "")}`;

  return (
    <section className="Experience-container">
      <section className="Experience-top">
        <div className="img-container">
          <img src={props.imgs[link]}></img>
        </div>
        <div className="Experience-header">
          <h5 className="u-highlight">
            {props.exp.jobtitle + " - " + props.exp.company}
          </h5>
          <div>{props.exp.location}</div>
          <div>{props.exp.date}</div>
        </div>
      </section>
    </section>
  );
};

export default Experience;
