import React from "react";

import resume from "../../public/docs/resume.pdf";
import Loading from "../modules/Loading";
import "./ResumePage.css";
import "../../utilities.css";

const ResumePage = (props) => {
  // Replaced link in src to resume stored locally
  // if (!props.driveid) return <Loading />;
  // const link = `https://drive.google.com/file/d/${props.driveid}/preview`;

  return (
    <>
      <div className="u-main-container">
        <h3 className="u-textCenter u-bold u-highlight">Resume</h3>
        <a className="ResumePage-frame u-fadeDown">
          <iframe
            className="ResumePage-frame"
            src={resume}
            allow="autoplay"
          ></iframe>
        </a>
      </div>
    </>
  );
};

export default ResumePage;
