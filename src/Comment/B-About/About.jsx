import React from "react";
import "./About.css";
import buildingImg from "./building.jpg";
import founderImg from "./Founder.jpg";
import C_Services from "../C-Services/Services";

const B_About = () => {
  return (
    <section className="about-section">

      {/* WHO WE ARE */}
      <div className="about-top">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            We are an architecture and design studio focused on creating functional,
            thoughtful, and sustainable spaces. Our work is guided by clarity in
            design, technical precision, and respect for context. We believe good
            architecture is simple, honest, and purposeful. Each project is
            approached with sensitivity to site, climate, and user experience.
          </p>
        </div>

        <div className="about-image">
        <img src={buildingImg} alt="Building" />

        </div>
      </div>

      {/* STATS */}
      <div className="about-stats">
        <div className="stat">
          <h3>10+</h3>
          <p>Years of Expertise</p>
        </div>
        <div className="stat">
          <h3>120+</h3>
          <p>Total Clients</p>
        </div>
        <div className="stat">
          <h3>200+</h3>
          <p>Projects Delivered</p>
        </div>
        <div className="stat">
          <h3>5+</h3>
          <p>Awards</p>
        </div>
      </div>

      {/* FOUNDER SECTION */}
      <div className="founder-section">
        <div className="founder-image">
       <img src={founderImg} alt="Founder" />
        </div>

        <div className="founder-text">
          <span className="founder-label">Founder</span>
          <h2>Design Led by Clarity and Purpose</h2>

          <p>
            The studio is founded by an architect with a strong focus on thoughtful
            design, functional planning, and disciplined project execution. With
            hands-on experience across architectural design, residential and
            commercial projects, interiors, boundary design, and project management
            consultancy, the founder brings a balanced approach that bridges
            creativity and practicality.
          </p>

          <p>
            The studio is founded by an architect with a strong focus on thoughtful
            design, functional planning, and disciplined project execution. With
            hands-on experience across architectural design, residential and
            commercial projects, interiors, boundary design, and project management
            consultancy, the founder brings a balanced approach that bridges
            creativity and practicality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default B_About;
