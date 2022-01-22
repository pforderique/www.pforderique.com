import React from "react";

import resume from "../../public/docs/resume.pdf";
import "../../utilities.css";
import "./HomeHeader.css";

/**
 * The Hero Heading located in the home page
 *
 * Proptypes
 * @param {object} profileinfo object
 */
const HomeHeader = (props) => {
  return (
    <>
      <div className="HomeHeader-top">
        <div className="u-highlight u-large">Hi, my name is</div>
        <h1 className="HomeHeader-name">{props.profileinfo.name}</h1>
        <h2 className="HomeHeader-header">{props.profileinfo.header}</h2>
      </div>
      <div>
        <p className="HomeHeader-bio">{props.profileinfo.bio}</p>
        <a href={resume} download="OrderiquePieroResume">
          <button className="u-btn">download resume</button>
        </a>
      </div>
    </>
  );
};

export default HomeHeader;
