import React, { useState } from "react";
import faqImg from "./image.png";
import "./FAQS.css";

const faqs = [
  {
    question: "What industries do you serve?",
    answer:
      "We work across key global sectors - Healthcare & Pharma, Real Estate & Construction, Manufacturing, Hospitality, IT & E-Commerce, and Energy & Infrastructure specific accounting, financial, and strategic guidance."
  },
  {
    question: "How long does a project take?",
    answer:
      "We work across key global sectors - Healthcare & Pharma, Real Estate & Construction, Manufacturing, Hospitality, IT & E-Commerce, and Energy & Infrastructure specific accounting, financial, and strategic guidance."
  },
  {
    question: "Do you offer custom solutions?",
    answer:
      "We work across key global sectors - Healthcare & Pharma, Real Estate & Construction, Manufacturing, Hospitality, IT & E-Commerce, and Energy & Infrastructure specific accounting, financial, and strategic guidance."
  },
  {
    question: "What is your pricing model?",
    answer:
     "We work across key global sectors - Healthcare & Pharma, Real Estate & Construction, Manufacturing, Hospitality, IT & E-Commerce, and Energy & Infrastructure specific accounting, financial, and strategic guidance."
  },
  {
    question: "Do you provide support after delivery?",
    answer:
      "Yes, we provide ongoing maintenance and support after project completion."
  },
  {
    question: "Where are you located?",
    answer:
      "We work across key global sectors - Healthcare & Pharma, Real Estate & Construction, Manufacturing, Hospitality, IT & E-Commerce, and Energy & Infrastructure specific accounting, financial, and strategic guidance."
  },
  {
    question: "How can we contact you?",
    answer:
      "We work across key global sectors - Healthcare & Pharma, Real Estate & Construction, Manufacturing, Hospitality, IT & E-Commerce, and Energy & Infrastructure specific accounting, financial, and strategic guidance."
  }
];

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-wrapper">

        {/* LEFT */}
        <div className="faq-left">
          <span className="faq-tag">• FAQs</span>

          <h1>
            Frequently asked <br /> questions
          </h1>

          <div className="faq-image">
            <img src={faqImg} alt="FAQ" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="faq-right">
          {faqs.map((item, index) => (
            <div key={index} className="faq-item">

              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>

                <span
                  className={`arrow ${
                    openIndex === index ? "rotate" : ""
                  }`}
                >
                  ▼
                </span>
              </div>

              {openIndex === index && (
                <p className="faq-answer">{item.answer}</p>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQS;