import React, { Suspense, lazy } from "react";

const Hero = lazy(() => import("./components/Hero/Hero"));
const About = lazy(() => import("./components/About/About"));
const Services = lazy(() => import("./components/Services/Services"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Educations = lazy(() => import("./components/Educations/Educations"));
const Portfolio = lazy(() => import("./components/Portfolio/Portfolio"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Testimonials = lazy(() =>
  import("./components/Testimonials/Testimonials")
);

function App() {
  return (
    <div className="portfolio-app">
      <Suspense fallback={<div>Loading...</div>}>
        <Hero id="hero" />
        <About id="about" />
        <Services id="services" />
        <Skills id="skills" />
        <Educations id="educations" />
        <Portfolio id="portfolio" />
        <Testimonials id="testimonials" />
        <Contact id="contact" />
        <Footer id="footer" />
      </Suspense>
    </div>
  );
}

export default App;
