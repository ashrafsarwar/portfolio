import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function Navbar() {
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

  // Add/remove class to disable/enable scrolling when the sidebar is open/closed
  useEffect(() => {
    if (showSidebar) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showSidebar]);

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h2 className="logo-name">Ashraf Sarwar</h2>
        </div>
        <nav>
          <ul className="nav-links">
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
        </nav>
        <div className="hero-btns">
          <a
            href="https://wa.me/+923263712430?text=Hello%20there! Hope you will be doing well! Have a Project? Let's discuss it!"
            target="_blank"
          >
            <button className="hireBtn">Hire Me</button>
          </a>
        </div>
      </div>

      <div className="sidebar">
        <div className="menu-icon">
          <HiMenuAlt1 onClick={() => setShowSidebar(!showSidebar)} />
        </div>
        <div className="logo">
          <h2 className="logo-name">Ashraf Sarwar</h2>
        </div>
        <aside className={`aside-container ${showSidebar ? `show` : ""}`}>
          <IoClose
            className="close-btn"
            onClick={() => setShowSidebar(!showSidebar)}
          />
          <ul className={`aside-links ${showSidebar ? `show` : ""}`}>
            <li onClick={() => handleNavClick("hero")}>
              <a href="#hero">Home</a>
            </li>
            <li onClick={() => handleNavClick("educations")}>
              <a href="#educations">Educations</a>
            </li>
            <li onClick={() => handleNavClick("services")}>
              <a href="#services">Services</a>
            </li>
            <li onClick={() => handleNavClick("skills")}>
              <a href="#skills">Skills</a>
            </li>
            <li onClick={() => handleNavClick("portfolio")}>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={() => handleNavClick("testimonials")}>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li onClick={() => handleNavClick("contact")}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </aside>
        <div className="hero-btns">
          <button className="hireBtn asideHire">Hire me</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
