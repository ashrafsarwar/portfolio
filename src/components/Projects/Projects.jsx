import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects({
  title,
  description,
  liveLink,
  githubLink,
  languages,
  img,
}) {
  return (
    <div className="project">
      <div className="project-container">
        <div className="project-img-container">
          <img className="project-img" src={img} alt="project" />
        </div>
        <div className="project-desc-container">
          <div className="project-headings">
            <h2 className="project-title">{title}</h2>
            <hr />

            <div className="project-icons">
              <a href={githubLink} className="icon" target="_blank">
                <FaGithub />
              </a>
              <a href={liveLink} className="icon" target="_blank">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
          <div className="project-desc">
            <h2 className="languages">
              <span>{languages}</span>
            </h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
