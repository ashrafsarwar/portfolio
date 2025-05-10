import React, { useEffect, useRef } from "react";
import "./Hero.css";
import Navbar from "../Navbar/Navbar";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import cv from "/src/CV_Ashraf Sarwar.pdf";
import LottieAnimation from "../Animations/LottyAnimations";
import { IoArrowRedoOutline } from "react-icons/io5";

function Hero({ id }) {
  const heroRef = useRef(null);

  // Intersection Observer for visibility functionality
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // Add the visible class when in view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="hero" id={id} ref={heroRef}>
      <Navbar />
      <div className="hero-content">
        <div className="hero-left">
          <div className="back-circles"></div>
          <h3 className="hero-name">
            Hi, I'm <br /> <span>Ashraf Sarwar</span>
          </h3>
          <h1 className="text-gradient">Full Stack Developer</h1>
          <ul className="social-links">
            <li>
              <a href="https://github.com/ASHRAF-SARWAR" target="_blank">
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ashrafsarwar6?igsh=bTAxYWFsZ2M0NG8y"
                target="_blank"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100080271886655&mibextid=ZbWKwL"
                target="_blank"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ashraf-sarwar-119887276/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
          <div className="hero-btns">
            <a
              href="https://wa.me/+923263712430?text=Hello%20there! Hope you will be doing well! Have a Project? Let's discuss it!"
              target="_blank"
            >
              <button className="hireBtn">Hire Me</button>
            </a>
            <a href={cv} download>
              <button className="cvBtn">Download CV</button>
            </a>
          </div>
          <div className="stats-container">
            <div className="stats-content">
              <div className="stats">
                <p className="span">
                  20+ <br /> <span>Projects</span>
                </p>
              </div>
              <hr />
              <div className="stats">
                <p className="span">
                  10+ <br /> <span>Clients</span>
                </p>
              </div>
              <hr />
              <div className="stats">
                <p className="span">
                  1.5+ <br /> <span>Years of Experience</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="lotty-container">
            <LottieAnimation />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
