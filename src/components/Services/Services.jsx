import React, { useEffect, useRef } from "react";
import "./Services.css";
import Service from "../SubComponents/Service/Service";
import { TiCloudStorageOutline } from "react-icons/ti";
import { MdDeveloperMode } from "react-icons/md";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { GiDrippingTube } from "react-icons/gi";
import { BiSolidShoppingBags } from "react-icons/bi";
import { TbSettingsCode } from "react-icons/tb";
import { FiFigma } from "react-icons/fi";
import { RiRobot3Line } from "react-icons/ri";

function Services({ id }) {
  const servicesRef = useRef(null);

  // Intersection Observer for visibility functionality
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

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  return (
    <div className="services-main">
      <div id={id} className="services" ref={servicesRef}>
        <div className="educations-headings">
          <h1 className="title">
            Services<span>.</span>
          </h1>
          <p>
            Here are the services that I have 2+ years of experience. I provided
            these services to deliver projects that exceed the client's
            requirements and expectations.
          </p>
        </div>
        <div className="services-content">
          <Service
            title="Web Development"
            icon={<TbDeviceDesktopCode />}
            desc="Building websites from the ground up or improving existing ones. Offering services like feature enhancements, bug resolution, and custom requests."
          />
          <Service
            title="App Development"
            icon={<MdDeveloperMode />}
            desc="Proficiency in developing native and hybrid mobile applications for Android and iOS platforms, leveraging specialized tech stacks to achieve the best results."
          />
          <Service
            title="E-commerce Development"
            icon={<BiSolidShoppingBags />}
            desc="Custom e-commerce site creation, online shop establishment, payment processor integration, and development of an admin panel and management dashboard."
          />

          <Service
            title="Maintenance & Support"
            icon={<TbSettingsCode />}
            desc="Committed maintenance services to keep your product up-to-date with the latest technologies and ensure seamless, continuous operation."
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
