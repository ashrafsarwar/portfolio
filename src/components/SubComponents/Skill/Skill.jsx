import React, { useState } from "react";
import "./Skill.css";
import {
  buildStyles,
  CircularProgressbarWithChildren,
  CircularProgressbar,
} from "react-circular-progressbar";
import ChangingProgressProvider from "../ChangingProgressProvider";
import "react-circular-progressbar/dist/styles.css";

function Skill({ icon, percentage }) {
  return (
    <div className="skill-container">
      <ChangingProgressProvider values={[0, percentage]}>
        {(currentPercentage) => (
          <div className="skill-circle">
            <CircularProgressbarWithChildren
              value={currentPercentage}
              counterClockwise
              styles={buildStyles({
                pathColor: "#ff6a00", // Progress bar stroke color (orange)
                trailColor: "#333", // Background circle color (dark gray)
                pathTransition:
                  currentPercentage === 0
                    ? "none"
                    : "stroke-dashoffset 0.5s ease 0s",
              })}
            >
              <div className="skill-icon"> {icon}</div>
            </CircularProgressbarWithChildren>
          </div>
        )}
      </ChangingProgressProvider>
    </div>
  );
}

export default Skill;
