import React, { useRef, useEffect } from "react";
import "./Contact.css";

function Contact({ id }) {
  const contactRef = useRef(null);

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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section className="contact-section" id={id} ref={contactRef}>
      <div className="contact-container">
        <h2>
          Contact<span>.</span>
        </h2>
        <p>Reach Out And Connect With Me</p>
        <form className="contact-form ">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea
            placeholder="Project Details..."
            rows="5"
            required
          ></textarea>
          <div className="hero-btns">
            <button type="submit" className="hireBtn">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
