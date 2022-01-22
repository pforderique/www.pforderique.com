import React from "react";

import "./SkillsBlurb.css";

/**
 * A Blrub for skills in one category
 */
const SkillsBlurb = (props) => {
  return (
    <section>
      <h5>{props.title}</h5>
      {!props.skills && "Loading..."}
      skills!
    </section>
  );
};

export default SkillsBlurb;
