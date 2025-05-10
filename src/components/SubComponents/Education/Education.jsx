import React from "react";
import { MdOutlineCastForEducation } from "react-icons/md";
import "./Education.css";

const Education = ({ degreeName, universityName, year, desc }) => {
  return (
    <>
      <div className="education-section">
        <div className="education-header">
          <div className="degree-icon">
            <MdOutlineCastForEducation className="edit-icon" />
          </div>
          <h2 className="degree-title">{degreeName}</h2>
        </div>

        <div className="university-details">
          <h3 className="university-name">{universityName}</h3>
          <div className="graduation-year">
            <span className="year-badge">{year}</span>
          </div>
          <p className="education-description">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default Education;
