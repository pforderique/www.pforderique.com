import React from "react";

import "./Experience.css";

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
        <img src={props.imgs[link]}></img>
        {props.exp.jobtitle}
      </section>
    </section>
  );
};

export default Experience;
