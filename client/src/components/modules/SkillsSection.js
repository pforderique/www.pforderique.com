import React, { useEffect, useState } from "react";

import SkillsBlurb from "./SkillsBlurb.js";
import { get } from "../../utilities.js";
import "../../utilities.css";
import "./SkillsSection.css";

/**
 * The Skills section in the home page
 *
 * Proptypes
 * @param {array} skills list of all skills
 */
const SkillsSection = () => {
  const [skills, setSkills] = useState(undefined);
  useEffect(() => {
    get("/api/skills").then((s) => {
      setSkills(s);
    });
  }, []);

  if (!skills) return <div>Loading skills...</div>;

  const sections = [
    ["Programming Languages", "programming language"],
    ["Technologies", "technology"],
    ["Certificates", "certificate"],
  ];

  return (
    <div className="SkillsSection-container">
      <div className="SkillsSection-header">
        <hr className="SkillsSection-line" />
        <h1 className="SkillsSection-title">Skills</h1>
        <hr className="SkillsSection-line" />
      </div>
      <section className="SkillsSection-section">
        {sections.map((section) => (
          <SkillsBlurb
            title={section[0]}
            skills={skills.filter((s) => s.type === section[1])}
          />
        ))}
      </section>
    </div>
  );
};

export default SkillsSection;
