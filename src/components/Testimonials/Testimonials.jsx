import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import img from "/default.png";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

import "./Testimonials.css";

const Testimonials = ({ id }) => {
  const testimonialRef = useRef(null);

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

    const currentTestimonial = testimonialRef.current;
    if (currentTestimonial) {
      observer.observe(currentTestimonial);
    }

    return () => {
      if (currentTestimonial) {
        observer.unobserve(currentTestimonial);
      }
    };
  }, []);

  return (
    <div className="testimonial-section" id={id} ref={testimonialRef}>
      <div className="testimonials-headings">
        <h3 className="testimonials-heading">
          What my clients say about me <span>?</span>
        </h3>
      </div>
      <section className="container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={1200}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="testimonial mySwiper"
        >
          <div className="testi-content swiper-wrapper">
            <SwiperSlide className="slide swiper-slide">
              <div className="quote-container">
                <ImQuotesLeft className="quote-icon" />
                <p>
                  Ashraf delivered exceptional work on our e-commerce website.
                  His attention to detail and understanding of user experience
                  made a significant impact. Highly recommended
                </p>
                <ImQuotesRight className="quote-icon" />
              </div>
              <div className="details">
                <img src={img} alt="Profile" className="image" />
                <div className="details-desc">
                  <span className="name">Emily Thompson</span>
                  <span className="job">Canada</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide swiper-slide">
              <div className="quote-container">
                <ImQuotesLeft className="quote-icon" />
                <p>
                  Working with Ashraf was a great experience. He was
                  professional and delivered the project ahead of schedule.
                </p>
                <ImQuotesRight className="quote-icon" />
              </div>
              <div className="details">
                <img src={img} alt="Profile" className="image" />
                <div className="details-desc">
                  <span className="name">Liam Brown</span>
                  <span className="job">South Africa</span>
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide className="slide swiper-slide">
              <div className="quote-container">
                <ImQuotesLeft className="quote-icon" />
                <p>
                  I highly recommend Ashraf! His work on our e-commerce site was
                  exceptional, and his communication was excellent throughout.
                </p>
                <ImQuotesRight className="quote-icon" />
              </div>
              <div className="details">
                <img src={img} alt="Profile" className="image" />
                <div className="details-desc">
                  <span className="name">Jane Smith</span>
                  <span className="job">Australia</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide swiper-slide">
              <div className="quote-container">
                <ImQuotesLeft className="quote-icon" />
                <p>Highly Recomended, very skilled person!</p>
                <ImQuotesRight className="quote-icon" />
              </div>
              <div className="details">
                <img src={img} alt="Profile" className="image" />
                <div className="details-desc">
                  <span className="name">Marco Rossi</span>
                  <span className="job">Italy </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide swiper-slide">
              <div className="quote-container">
                <ImQuotesLeft className="quote-icon" />
                <p>
                  We had an excellent experience working with Ashraf. He
                  delivered on time and was very responsive throughout the
                  process.
                </p>
                <ImQuotesRight className="quote-icon" />
              </div>
              <div className="details">
                <img src={img} alt="Profile" className="image" />
                <div className="details-desc">
                  <span className="name">Sophie Müller</span>
                  <span className="job">Germany</span>
                </div>
              </div>
            </SwiperSlide>
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonials;
