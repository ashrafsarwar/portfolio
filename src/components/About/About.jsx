import React, { useEffect, useRef } from "react";
import "./About.css";
import Pic from "/OrangeBG.jpg";
import cv from "/src/CV_Ashraf Sarwar.pdf";

function About({ id }) {
  const aboutRef = useRef(null);

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
      { threshold: 0.1 } // Trigger when 10% of the section is in view
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div id={id} ref={aboutRef} className="about">
      <div className="educations-headings">
        <h1 className="title">
          About<span>.</span>
        </h1>
        <p>
          I’m a full-stack developer from Sadiqabad, Pakistan, studying Software
          Engineering at UET Taxila. With four years of MERN stack experience, I
          focus on building efficient, user-friendly applications.
        </p>
      </div>
      <div className="about-content">
        <div className="about-left" ref={aboutRef}>
          <div className="img-container">
            <div className="frame">
              <img className="profile-picture" src={Pic} alt="Ashraf Sarwar" />
            </div>
          </div>
        </div>
        <div className="about-right" ref={aboutRef}>
          <div className="about-right-content">
            <h1>
              <span>I’m</span> Ashraf Sarwar
            </h1>
            <p className="about-desc">
              I am from Sadiqabad, Pakistan, pursuing a BS in Computer Science
              at UET Taxila. With over four years of experience in Full Stack
              Development, specializing in the MERN stack and technologies like
              React and Next.js, I build high-performance web applications and
              continually enhance my technical, communication, and project
              management skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
