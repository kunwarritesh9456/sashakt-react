import { useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    e.target.reset();
  };

 return (
    <section className="contact-section">
      <div className="contact-wrapper">
        {/* BACKGROUND IMAGE */}
        <img src="/image 14.png" className="bg-image" />

        {/* DARK OVERLAY */}
        <div className="overlay"></div>

        {/* LEFT */}
        <div className="contact-left">
          <span>• CONTACT US</span>
          <h1>
            LET’S BUILD <br /> TOGETHER
          </h1>
          <p>
            Contact us to discuss your idea and bring it to reality, creating a
            unique space designed for your future success.
          </p>

          <div className="info-card">
            <div>
              <small>Email</small>
              <p>Sashaktarchitect@gmail.com</p>
            </div>
            <div>
              <small>Contact</small>
              <p>+91 82678 79678</p>
            </div>
            <div>
              <small>Location</small>
              <p>
                Raipur Rd, Kailash Vihar, Ladpur, Dehradun, Uttarakhand 248008
              </p>
            </div>
          </div>

          <div className="socials">
            <div>
              <FaFacebookF />
            </div>
            <div>
              <FaInstagram />
            </div>
            <div>
              <FaYoutube />
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Enter your Name</label>
          <input placeholder="Aayush Gupta" />

          <label>Enter your Email</label>
          <input placeholder="Aayush@gmail.com" />

          <label>Enter your Contact</label>
          <input placeholder="+91 99883 23212" />

          <label>What the Services Required</label>
          <input placeholder="Interior Design" />

          <label>Enter the Message</label>
          <textarea placeholder="Tell us about your project, goals, or questions" />

          <button type="submit">Submit Message</button>

        {submitted && (
       <p className="success-message">
         ✅ Message Submitted Successfully!
        </p>
       )} 
        </form>
        </div>
    </section>
  );
}
