import React from "react";

import "../../utilities.css";

/**
 * A Blrub for skills in one category
 *
 * Proptypes
 * @param {string} title of skills blurb
 * @param {array} skills to show
 */
const SkillsBlurb = (props) => {
  return (
    <section>
      <h5 className="u-highlight u-bold">{props.title}</h5>
      {!props.skills && "Loading..."}
      <div>{props.skills.map((s) => s.name + " ")}</div>
    </section>
  );
};

export default SkillsBlurb;
