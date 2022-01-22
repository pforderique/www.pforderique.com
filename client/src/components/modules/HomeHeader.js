import { Link } from "@reach/router";
import React, { useEffect, useState } from "react";

// import resume from "../../public/docs/resume.pdf";
import "../../utilities.css";
import "./HomeHeader.css";

/**
 * The navigation bar at the top of all pages.
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
        <a
          // href={require("../../public/docs/resume.pdf")}
          // href={resume}
          href="../../public/docs/resume.pdf"
          download="rules"
        >
          <button className="u-btn">download resume</button>
        </a>
        {/* <hr /> */}
      </div>
    </>
  );
};

export default HomeHeader;
