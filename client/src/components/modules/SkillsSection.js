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
      console.log("Fetched skills:", s);
      setSkills(s);
    });
  }, []);

  if (skills == undefined) return <div></div>;
  if (!skills) return <div>Loading skills...</div>;

  const sections = [
    ["Programming Languages", "programming"],
    ["ML/AI", "ML/AI"],
    ["Infrastructure", "infrastructure"],
    ["Certificates", "certificates"],
  ];

  return (
    <div className="SkillsSection-container">
      <div className="SkillsSection-header">
        <hr className="SkillsSection-line" />
        <h1 className="SkillsSection-title">Skills</h1>
        <hr className="SkillsSection-line" />
      </div>
      <section className="SkillsSection-section">
        {sections.map((section, idx) => (
          <SkillsBlurb
            key={`key_${idx}`}
            title={section[0]}
            skills={skills.filter((s) => s.type === section[1])}
          />
        ))}
      </section>
    </div>
  );
};

export default SkillsSection;
