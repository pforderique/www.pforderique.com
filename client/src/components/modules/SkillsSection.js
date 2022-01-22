import React, { useEffect, useState } from "react";

import { get } from "../../utilities.js";
import "../../utilities.css";
import "./SkillsSection.css";

/**
 * The navigation bar at the top of all pages.
 */
const SkillsSection = (props) => {
  const [skills, setSkills] = useState(undefined);
  useEffect(() => {
    get("/api/skills").then((s) => {
      setSkills(s);
    });
  }, []);

  return (
    <div className="SkillsSection-container">
      <div className="SkillsSection-header">
        <h1 className="SkillsSection-title">Skills</h1>
      </div>
      <section className="SkillsSection-section">
        <section>
          <h5>Programming Languages</h5>
          {!skills && "Loading..."}
        </section>
        <section>
          <h5>Programming Languages</h5>
          test
        </section>
        <section>
          <h5>Programming Languages</h5>
          test
        </section>
      </section>
    </div>
  );
};

export default SkillsSection;
