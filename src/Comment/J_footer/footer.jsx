import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import "./footer.css";

export default function Footer({
  image = "/footer-image.png",
  email = "Sashaktarchitect@gmail.com",
  phone = "+91 82678 79678",
  address = "Raipur Rd, Kailash Vihar, Ladpur, Dehradun, Uttarakhand 248008",
}) {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT IMAGE */}
        <div className="footer-image">
          <img src={image} alt="Architecture" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="footer-content">

          {/* TOP */}
          <div className="footer-top">
            <h2>
              Let’s Turn Your Vision <br /> into Built Form
            </h2>

            <NavLink to="/contact" className="inquiry-btn">
              Send Inquiry
            </NavLink>
          </div>

          <div className="divider"></div>

          {/* MIDDLE */}
          <div className="footer-middle">
            <div className="footer-info">
              <p>{email}</p>
              <p>{phone}</p>
              <p>{address}</p>

              <div className="footer-socials">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaXTwitter /></a>
                <a href="#"><FaYoutube /></a>
              </div>
            </div>

            {/* ROUTER LINKS */}
            <div className="footer-links">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/work">Work</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/blog">Blog</NavLink>
            </div>
          </div>

          <div className="divider"></div>

          {/* BOTTOM */}
          <div className="footer-bottom">
            <NavLink to="/terms">Terms of Use</NavLink>
            <NavLink to="/privacy">Privacy Policy</NavLink>
            <NavLink to="/refund">Refund Policy</NavLink>
          </div>

        </div>
      </div>
    </footer>
  );
}