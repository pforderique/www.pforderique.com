import React, { useEffect, useState } from "react";

import Experience from "./Experience";
// import borinquenfoods from "../../public/images/companyimages/borinquenfoods.png";
// import mathnasium from "../../public/images/companyimages/mathnasium.png";
// import microsoft from "../../public/images/companyimages/microsoft.png";
// import mitos from "../../public/images/companyimages/mitos.png";
// import nvidia from "../../public/images/companyimages/nvidia.png";
// import google from "../../public/images/companyimages/google.png";

import { get } from "../../utilities.js";
import "./ExperienceSection.css";

/**
 * The Experience section of the homepage
 */
const ExperienceSection = () => {
  const [experiences, setExperiences] = useState(undefined);

  // const images = {
  //   _borinquenfoods: borinquenfoods,
  //   _mathnasium: mathnasium,
  //   _mitos: mitos,
  //   _microsoft: microsoft,
  //   _nvidia: nvidia,
  //   _google: google,
  // };

  useEffect(() => {
    get("/api/experiences").then((exp) => setExperiences(exp));
  }, []);

  return (
    <div className="ExperienceSection-container">
      <div className="ExperienceSection-header">
        <h1 className="ExperienceSection-title">Experience</h1>
        <hr className="ExperienceSection-line" />
      </div>
      <section className="ExperienceSection-section">
        {!experiences ? (
          <div>Loading...</div>
        ) : (
          experiences.map((exp, idx) => (
            <Experience key={`key_${idx}`} exp={exp} />
          ))
        )}
      </section>
    </div>
  );
};

export default ExperienceSection;
