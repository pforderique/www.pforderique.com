import React, { useEffect, useState } from "react";

import { get, fetchImage } from "../../utilities.js";
import Loading from "../modules/Loading";
import "./SingleProject.css";
import "../../utilities.css";

/**
 * A display module for a single project
 *
 * Proptypes
 * @param {id} projectid to dislpay
 */
const SingleProject = (props) => {
  const [project, setProject] = useState(undefined);

  useEffect(() => {
    get("/api/project", { projectid: props.projectid }).then((p) => {
      if (!p.id) setProject(null);
      else setProject(p);
    });
  }, []);

  if (project === undefined) return <Loading />;
  if (project === null)
    return <div className="u-textCenter">No project found.</div>;

  return (
    <div className="SingleProject-container u-main-container">
      <section className="SingleProject-subcontainer">
        <h2 className="u-highlight u-bold">
          {project.github && (
            <a href={project.github} target="_blank">
              <i className="SingleProject-icon fab fa-github u-highlight"></i>
            </a>
          )}
          {project.title + " "}
        </h2>
        <section className="SingleProject-details">
          <h5>
            <span className="u-bold">Year: </span>
            {project.year}
          </h5>
          <h5>
            {
              project.category && (
                <>
                  <span className="u-bold">{`${project.category.split("|")[0]}: `}</span>
                  {project.category.split("|")[1]}
                </>
              )
            }
          </h5>
        </section>
        <span>
          {project.longDes}
          {project.link && (
            <span>
              {" "}
              See more <a href={project.link}>here.</a>
            </span>
          )}
        </span>
      </section>
      <div className="SingleProject-img-container">
        {project.playable_link && Number(window.innerWidth) > 1200 ? (
          // If there's a playable link and on desktop, show the playable link
          <iframe
            className="SingleProject-play"
            src={project.playable_link}
            scrolling="no"
            frameBorder="o"
          ></iframe>
        ) : (
          project.link ? (
            <div className="SingleProject-img-wrapper">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={fetchImage(project.image)} alt={project.title} />
              </a>
            </div>
          ) : (
            <img src={fetchImage(project.image)} alt={project.title} />
          )
        )}
      </div>
    </div>
  );
};

export default SingleProject;
