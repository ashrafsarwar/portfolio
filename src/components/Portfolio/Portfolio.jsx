import React, { useEffect, useRef, useState } from "react";
import "./Portfolio.css";
import Projects from "../Projects/Projects";
import { projectsData } from "../../data";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

function Portfolio({ id }) {
  const portfolioRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 4; // Number of projects to display per page

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.005 }
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => {
      if (portfolioRef.current) {
        observer.unobserve(portfolioRef.current);
      }
    };
  }, []);

  const handleNext = () => {
    if (currentPage < Math.ceil(projectsData.length / projectsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Calculate the index of the first and last project to display
  const startIndex = currentPage * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projectsData.slice(startIndex, endIndex);

  return (
    <div className="portfolio" id={id} ref={portfolioRef}>
      <div className="portfolio-headings">
        <h1 className="title">
          Portfolio<span>.</span>
        </h1>
        <p>
          I have tackled a wide range of projects, including e-commerce
          solutions, blockchain applications, company websites, and platform
          management systems. Here are a few examples.
        </p>
      </div>
      <div className="portfolio-content">
        {currentProjects.map((project) => (
          <Projects
            key={project.title}
            title={project.title}
            description={project.description}
            languages={project.languages}
            liveLink={project.liveLinks}
            githubLink={project.githubLink}
            img={project.img}
          />
        ))}
      </div>
      {projectsData.length > 0 && (
        <div className="pagination-buttons">
          <GrPrevious
            className="pagination-icon"
            onClick={handlePrevious}
            disabled={currentPage === 0}
          >
            Previous
          </GrPrevious>
          <div className="pagination-text">
            {startIndex + 1 < 10 ? 0 : null} {startIndex + 1} -{" "}
            {endIndex < 10 ? 0 : null}
            {endIndex}
          </div>
          <GrNext
            className="pagination-icon"
            onClick={handleNext}
            disabled={endIndex >= projectsData.length}
          >
            Next
          </GrNext>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
