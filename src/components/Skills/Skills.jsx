import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";
import Skill from "../SubComponents/Skill/Skill";
import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextui,
  SiRedux,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { FaNodeJs, FaGitAlt, FaGithub, FaAws } from "react-icons/fa";
import { GrGraphQl, GrMysql } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

function Skills({ id }) {
  const skillsRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const skillsPerPage = 6; // Number of skills to display per page

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
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const handleNext = () => {
    if (currentPage < Math.ceil(skills.length / skillsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Define the skills array
  const skills = [
    { percentage: 100, icon: <SiHtml5 className="skill-icon" />, name: "HTML" },
    { percentage: 100, icon: <SiCss3 className="skill-icon" />, name: "CSS" },
    {
      percentage: 100,
      icon: <SiJavascript className="skill-icon" />,
      name: "JavaScript",
    },
    {
      percentage: 90,
      icon: <BsBootstrapFill className="skill-icon" />,
      name: "Bootstrap",
    },
    {
      percentage: 100,
      icon: <RiReactjsLine className="skill-icon" />,
      name: "React",
    },
    {
      percentage: 100,
      icon: <TbBrandNextjs className="skill-icon" />,
      name: "Next.js",
    },
    {
      percentage: 100,
      icon: <SiRedux className="skill-icon" />,
      name: "Redux",
    },
    {
      percentage: 100,
      icon: <FaNodeJs className="skill-icon" />,
      name: "Node.js",
    },
    {
      percentage: 100,
      icon: <SiExpress className="skill-icon" />,
      name: "Express.js",
    },
    {
      percentage: 100,
      icon: <SiMongodb className="skill-icon" />,
      name: "MongoDB",
    },
    { percentage: 90, icon: <GrMysql className="skill-icon" />, name: "MySQL" },
    { percentage: 90, icon: <FaGitAlt className="skill-icon" />, name: "Git" },
    {
      percentage: 98,
      icon: <FaGithub className="skill-icon" />,
      name: "GitHub",
    },
    { percentage: 90, icon: <FaAws className="skill-icon" />, name: "AWS" },
  ];

  // Calculate the index of the first and last skill to display
  const startIndex = currentPage * skillsPerPage;
  const endIndex = Math.min(startIndex + skillsPerPage, skills.length);
  const currentSkills = skills.slice(startIndex, endIndex);

  return (
    <div className="skills" id={id} ref={skillsRef}>
      <div className="educations-headings">
        <h1 className="title">
          Skills<span>_</span>
        </h1>
        <p>
          I specialize in full-stack development with a focus on React.js and
          Node.js, creating high-quality, scalable digital products tailored to
          client needs.
        </p>
      </div>
      <div className="skills-container">
        {currentSkills.map((skill) => (
          <div className="skill" key={skill.name}>
            <Skill percentage={skill.percentage} icon={skill.icon} />
            <p className="skill-percent">
              {skill.percentage}% <br /> <span>{skill.name}</span>
            </p>
          </div>
        ))}
      </div>
      {currentSkills.length > 0 && (
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
            {endIndex}{" "}
          </div>
          <GrNext
            className="pagination-icon"
            onClick={handleNext}
            disabled={endIndex >= skills.length}
          >
            Next
          </GrNext>
        </div>
      )}
    </div>
  );
}

export default Skills;
