import React, { useState } from "react";
import "./Services.css";

const services = [
  {
    title: "ARCHITECTURAL DESIGN",
    image: "service.image.png",
  },
  {
    title: "ARCHITECTURAL DESIGN",
    image: "service.image.png",
  },
  {
    title: "ARCHITECTURAL DESIGN",
    image: "service.image.png",
  },
  {
    title: "ARCHITECTURAL DESIGN",
    image: "service.image.png",
  },
  {
    title: "ARCHITECTURAL DESIGN",
    image: "service.image.png",
  },
];

const description =
  "Thoughtful, functional, and context-driven design solutions that balance aesthetics, sustainability, spatial efficiency, and long-term usability across diverse projects.";

export default function C_Services() {
  const [active, setActive] = useState(0);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="services-section">

      <div className="services-container">

        <p className="services-label">• OUR SERVICES</p>

        <h1 className="services-heading">
          From Idea To Final Product
        </h1>

        <div className="services-list">

          {services.map((service, index) => (

            <div className="service-item" key={index}>

              {/* HEADER */}
              <div
                className="service-header"
                onClick={() => toggle(index)}
              >

                <div className="service-left">

                  <span className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h2 className="service-title">
                    {service.title}
                  </h2>

                </div>

                <span className="service-icon">
                  {active === index ? "−" : "+"}
                </span>

              </div>

              {/* EXPAND AREA */}
              <div
                className={`service-content ${
                  active === index ? "open" : ""
                }`}
              >

                <p className="service-text">
                  {description}
                </p>

                <img
                  src={service.image}
                  alt="service"
                  className="service-image"
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}