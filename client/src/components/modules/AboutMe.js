import React, { useState, useEffect } from "react";

import portrait from "../../public/me.jpg";
import { get } from "../../utilities.js";
import "./AboutMe.css";
import "../../utilities.css";

/**
 * The About Me section of the homepage
 */
const AboutMe = (props) => {
  const [visitor, setVisitor] = useState(undefined);

  useEffect(() => {
    get("/api/visitor").then((v) => setVisitor(v));
  }, []);

  const linksAndIcons = [
    [props.profileinfo.github, "fa-github"],
    [props.profileinfo.linkedin, "fa-linkedin"],
    [props.profileinfo.instagram, "fa-instagram"],
    [props.profileinfo.facebook, "fa-facebook"],
  ];
  return (
    <div className="AboutMe-container">
      <div className="AboutMe-header">
        <h1 className="AboutMe-title">About Me</h1>
        <hr className="AboutMe-line" />
      </div>
      <section className="AboutMe-section">
        <section className="AboutMe-des">
          {visitor && (
            <p>
              <span className="u-highlight u-bold">Welcome!</span>
              {` You are visitor ${visitor.number}!`}
            </p>
          )}
          {props.profileinfo.aboutmes.map((des, idx) => (
            <p key={`key_${idx}`}>{des}</p>
          ))}
          <div className="AboutMe-social">
            {linksAndIcons.map((item, idx) => {
              return (
                <a key={`socialmedia_${idx}`} href={item[0]}>
                  <i className={`fab ${item[1]} fa-2x`}></i>
                </a>
              );
            })}
            <a href={`mailto: ${props.profileinfo.email}`}>
              <i className="far fa-envelope fa-2x"></i>
            </a>
          </div>
        </section>
        <img className="AboutMe-image" src={portrait} />
      </section>
    </div>
  );
};

export default AboutMe;
