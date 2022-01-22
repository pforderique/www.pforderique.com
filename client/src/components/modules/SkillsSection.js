import React, { useEffect, useState } from "react";

import SkillsBlurb from "./SkillsBlurb.js";
import { get } from "../../utilities.js";
import "../../utilities.css";
import "./SkillsSection.css";

/**
 * The Skills section in the home page
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
        <SkillsBlurb title="Programming Languages" />
      </section>
    </div>
  );
};

export default SkillsSection;
