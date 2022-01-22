import React from "react";

import portrait from "../../public/me.jpg";
import "./AboutMe.css";
import "../../utilities.css";

/**
 * The navigation bar at the top of all pages.
 */
const AboutMe = (props) => {
  return (
    <div className="AboutMe-container">
      <div className="AboutMe-header">
        <h1 className="AboutMe-title">About Me</h1>
        <hr className="AboutMe-line" />
      </div>
      <section className="AboutMe-section">
        <section className="AboutMe-des">
          {props.aboutmes.map((des, idx) => (
            <p key={`key_${idx}`}>{des}</p>
          ))}
        </section>
        <img className="AboutMe-image" src={portrait} />
      </section>
    </div>
  );
};

export default AboutMe;
