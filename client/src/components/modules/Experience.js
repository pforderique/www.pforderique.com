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
        <div className="Experience-img-container">
          <img src={props.imgs[link]}></img>
        </div>
        <div className="Experience-header">
          <h5 className="u-highlight u-bold">
            {props.exp.jobtitle + " - " + props.exp.company}
          </h5>
          <div>{props.exp.location}</div>
          <div>{props.exp.date}</div>
        </div>
      </section>
      <section className="Experience-des">
        {props.exp.description}
        {props.exp.links.length !== 0 &&
          props.exp.linksDes.map((des, idx) => (
            <span key={`key_${idx}`}>
              {" " + des + " "}
              <a href={props.exp.links[idx]}>here</a>.
            </span>
          ))}
      </section>
      <ul className="Experience-bullets">
        {props.exp.bullets.map((bullet) => (
          <li>{bullet}</li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
