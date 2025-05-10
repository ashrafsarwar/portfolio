import React, { useRef, useEffect } from "react";
import Education from "../SubComponents/Education/Education";
import "./Educations.css";

function Educations({ id }) {
  const educationsRef = useRef(null);

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

    if (educationsRef.current) {
      observer.observe(educationsRef.current);
    }

    return () => {
      if (educationsRef.current) {
        observer.unobserve(educationsRef.current);
      }
    };
  }, []);

  return (
    <div className="educations" id={id} ref={educationsRef}>
      <div className="educations-headings">
        <h1 className="title">
          Education<span>.</span>
        </h1>
        <p>
          Here is a summary of my educational background: This period has been
          an enriching learning experience, contributing significantly to my
          personal and professional growth.
        </p>
      </div>
      <div className="education-content">
        <Education
          degreeName="BS Computer Science"
          universityName="University of Engineering & Technology, Taxila"
          year="2022-present"
          desc="I am currently pursuing my BS in Computer Science at the prestigious University of Engineering and Technology, Taxila. As a student in my 5th semester, this academic journey has been a highly enriching experience, helping me expand my knowledge in various technologies and sharpen my skills. Collaborating on projects with diverse teams has provided me with valuable insights into teamwork and cross-cultural communication. Additionally, I have developed strong time management abilities and a growing commitment to meeting deadlines."
        />
        <Education
          degreeName="FSC Pre-Engineering"
          universityName="MTB Schools & Colleges, SadiqAbad"
          year="2020-2022"
          desc="I completed my FSC Pre-Engineering at MTB Schools & Colleges, SadiqAbad, from 2020 to 2022. This foundational education equipped me with a solid understanding of engineering principles and set the stage for my current pursuit of a BS in Computer Science at the University of Engineering and Technology, Taxila. The experience at MTB Schools & Colleges was instrumental in developing my analytical and problem-solving skills, which continue to support my academic and professional growth."
        />
        <Education
          degreeName="(10th) Matriculation"
          universityName="Al Noor Public High School, SadiqAbad"
          year="2018-2020"
          desc="I completed my Matriculation at Al Noor Public High School, SadiqAbad, from 2018 to 2020. This formative stage of my education was pivotal in shaping my academic interests and skills. The curriculum offered a robust foundation in core subjects such as Mathematics, Physics, and Chemistry, which ignited my passion for science and technology. My time at Al Noor Public High School was marked by a dedication to academic excellence and active participation in extracurricular activities, which helped develop my problem-solving abilities and teamwork skills. This period not only prepared me for advanced studies but also instilled a strong sense of discipline and commitment to my educational goals."
        />
      </div>
    </div>
  );
}

export default Educations;
