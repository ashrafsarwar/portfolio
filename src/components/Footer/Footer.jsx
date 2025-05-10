import React, { useRef, useEffect, useState } from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { IoCall } from "react-icons/io5";

function Footer() {
  const footerRef = useRef(null);

  // Intersection Observer for the fade-in and slide-in effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const [showSidebar, setShowSidebar] = useState(false);

  // Smooth scroll function
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    }
  };

  const handleNavClick = (id) => {
    handleScroll(id); // Trigger smooth scroll
    setShowSidebar(false); // Close sidebar (if it's open)
  };

  return (
    <footer ref={footerRef}>
      <div className="footer-container">
        <div className="footer-logo">
          <h2 className="logo-name">Ashraf Sarwar</h2>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("hero");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#educations"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("educations");
                }}
              >
                Educations
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("services");
                }}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("skills");
                }}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("portfolio");
                }}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("testimonials");
                }}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("contact");
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="links-container">
          <ul className="social-links">
            <li>
              <a href="https://github.com/ASHRAF-SARWAR" target="_blank">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ashrafsarwar6" target="_blank">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100080271886655"
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
        </div>
        <div className="footer-contact">
          <p>
            <CiMail />
            <a href="mailto:ashrafsarwar542@gmail.com" target="_blank">
              ashrafsarwar542@gmail.com
            </a>
          </p>
          <p>
            <IoCall />
            <a href="tel:+923263712430" target="_blank">
              +923263712430
            </a>
          </p>
        </div>
        <div className="footer-credit">
          <hr />
          <p>Copyright © 2024 Ashraf Sarwar (MERN Stack Developer).</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
