import React from "react";

import { fetchImage } from "../../utilities.js";

import "./Experience.css";
import "../../utilities.css";

/**
 * An experience module for one job
 *
 * Proptypes
 * @param {object} exp the experience to show
 * @param {object} images containing all image links
 */
const Experience = (props) => {
  const img = fetchImage(props.exp.image);

  return (
    <section className="Experience-container">
      <section className="Experience-top">
        <div className="Experience-img-container">
          <img src={img}></img>
        </div>
        <div className="Experience-header">
          <h5 className="u-highlight u-bold">
            {props.exp.jobtitle + " @ " + props.exp.company}
          </h5>
          <div>{props.exp.date}</div>
          <div><em>{props.exp.location}</em></div>
        </div>
      </section>
      <section className="Experience-des">
        {props.exp.description}
        {props.exp.links.length !== 0 &&
          <span>
            {props.exp.linksDes.map((des, idx) => (
              <React.Fragment key={`key_${idx}`}>
                <a href={props.exp.links[idx]}><em>{" " + des + " "}</em></a>
                {idx < props.exp.linksDes.length - 1 && " | "}
              </React.Fragment>
            ))}
          </span>
        }
      </section>
      <ul className="Experience-bullets">
        {props.exp.bullets.map((bullet, idx) => (
          <li key={`key_${idx}`}>{bullet}</li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
