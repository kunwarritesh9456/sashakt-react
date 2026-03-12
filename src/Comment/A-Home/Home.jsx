import { useState } from "react";
import { NavLink } from "react-router-dom";
import heroImg from "./HomeImage.png";
import "./Home.css";

export default function NavbarHero() {

  const [open, setOpen] = useState(false);

  return (
    <section
      className="hero-wrapper"
      style={{ backgroundImage: `url(${heroImg})` }}
    >

      <div className="hero-overlay"></div>

      {/* NAVBAR */}
      <header className="navbar-wrapper">

        <nav className="navbar">

          {/* LOGO */}
          <div className="nav-logo">
            <img src="/logo.png" alt="logo" />
          </div>

          {/* DESKTOP MENU */}
          <ul className="nav-links">

            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/About">About</NavLink>
            </li>

            <li>
              <NavLink to="/services">Services</NavLink>
            </li>

            <li>
              <NavLink to="/work">Work</NavLink>
            </li>

            <li>
              <NavLink to="/Blogs">Blog</NavLink>
            </li>

            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>

          </ul>

          {/* CTA BUTTON */}
          <NavLink to="/contact" className="nav-btn">
            Book a Consultation
          </NavLink>

          {/* HAMBURGER */}
          <div
            className={`hamburger ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

        </nav>

        {/* MOBILE MENU */}
        <div className={`mobile-menu ${open ? "show" : ""}`}>

          <NavLink onClick={() => setOpen(false)} to="/">Home</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/about">About</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/services">Services</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/work">Work</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/blog">Blog</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/contact">Contact</NavLink>

          <NavLink
            to="/contact"
            className="mobile-btn"
            onClick={() => setOpen(false)}
          >
            Book a Consultation
          </NavLink>

        </div>

      </header>

      {/* HERO */}
      <div className="hero-content">

        <h1>
          Designing spaces with <br />
          purpose & precision.
        </h1>

        <p>
          We are an architecture and design studio creating thoughtful,
          functional, and timeless spaces through context-driven design
          and careful execution.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Book a Consultation
          </button>

          <button className="secondary-btn">
            Explore Our Work
          </button>

        </div>

      </div>

    </section>
  );
}