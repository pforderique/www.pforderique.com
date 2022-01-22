import React from "react";

import portrait from "../../public/me.jpg";
import "./AboutMe.css";
import "../../utilities.css";

/**
 * The navigation bar at the top of all pages.
 */
const AboutMe = (props) => {
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
