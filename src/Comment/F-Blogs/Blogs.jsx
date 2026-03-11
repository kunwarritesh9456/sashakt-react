import React, { useState } from "react";
import "./Blogs.css";
export default function Blogs() {
  // 🔁 reversed: start with horizontal
  const [isGrid, setIsGrid] = useState(false);

  // const blogs = Array(12).fill({
  //   image:
  //     "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  //   title: "The Role of PMC in Successful Projects",
  //   desc:
  //     "Practical knowledge and design insights to help you understand architecture, interiors, and project management.",
  // });

  const blogs = [
    {
      image: "/Image.jpg",
      title: "The Role of PMC in Successful Projects",
      desc: "Practical knowledge and design insights to help you understand architecture, interiors, and project management.",
    },
    {
      image: "/Image.jpg",
      title: "The Role of PMC in Successful Projects",
      desc: "Practical knowledge and design insights to help you understand architecture, interiors, and project management.",
    },
    {
      image: "/Image.jpg",
      title: "Test title",
      desc: "Practical knowledge and design insights to help you understand architecture, interiors, and project management.",
    },
    {
     image: "/Image.jpg",
      title: "The Role of PMC in Successful Projects",
      desc: "Practical knowledge and design insights to help you understand architecture, interiors, and project management.",
    },
    {
      image: "/Image.jpg",
      title: "The Role of PMC in Successful Projects",
      desc: "Practical knowledge and design insights to help you understand architecture, interiors, and project management.",
    },
    {
      image: "/Image.jpg",
      title: "The Role of PMC in Successful Projects",
      desc: "Practical knowledge and design insights to help you understand architecture, interiors, and project management.",
    },
    {
      image: "/Image.jpg",
      title: "The Role of PMC in Successful Projects",
      desc: "Practical knowledge and design insights to help you understand architecture, interiors, and project management.",
    },
    {
      image: "/Image.jpg",
      title: "The Role of PMC in Successful Projects",
      desc: "Practical knowledge and design insights to help you understand architecture, interiors, and project management.",
    },
    {
      image: "/Image.jpg",
      title: "The Role of PMC in Successful Projects",
      desc: "Practical knowledge and design insights to help you understand architecture, interiors, and project management.",
    },
    {
      image: "/Image.jpg",
      title: "The Role of PMC in Successful Projects",
      desc: "Practical knowledge and design insights to help you understand architecture, interiors, and project management.",
    },
    {
      image: "/Image.jpg",
      title: "The Role of PMC in Successful Projects",
      desc: "Practical knowledge and design insights to help you understand architecture, interiors, and project management.",
    },
    {
      image: "/Image.jpg",
      title: "The Role of PMC in Successful Projects",
      desc: "Practical knowledge and design insights to help you understand architecture, interiors, and project management.",
    },
    {
      image: "/Image.jpg",
      title: "The Role of PMC in Successful Projects",
      desc: "Practical knowledge and design insights to help you understand architecture, interiors, and project management.",
    },
    {
      image: "/Image.jpg",
      title: "The Role of PMC in Successful Projects",
      desc: "Practical knowledge and design insights to help you understand architecture, interiors, and project management.",
    },
    {
      image: "/Image.jpg",
      title: "The Role of PMC in Successful Projects",
      desc: "Practical knowledge and design insights to help you understand architecture, interiors, and project management.",
    },
    {
      image: "/Image.jpg",
      title: "The Role of PMC in Successful Projects",
      desc: "Practical knowledge and design insights to help you understand architecture, interiors, and project management.",
    },
    {
      image: "/Image.jpg",
      title: "The Role of PMC in Successful Projects",
      desc: "Practical knowledge and design insights to help you understand architecture, interiors, and project management.",
    },
    {
      image: "/Image.jpg",
      title: "The Role of PMC in Successful Projects",
      desc: "Practical knowledge and design insights to help you understand architecture, interiors, and project management.",
    },
  ];

  return (
    <section className="blogs-section">
      {/* HEADER */}
      <div className="blogs-header">
        <div>
          <p className="blogs-subtitle">• OUR BLOGS</p>
          <h2 className="blogs-title">Insights & Articles</h2>
          <p className="blogs-desc">
            Practical knowledge and design insights to help you understand
            architecture, interiors, and project management.
          </p>
        </div>

        <button className="explore-btn" onClick={() => setIsGrid(true)}>
          Explore All Blogs →
        </button>
      </div>

      {/* BLOG LIST */}
      <div className={`blogs-wrapper ${isGrid ? "grid" : "horizontal"}`}>
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt="blog" />
            <h3>{blog.title}</h3>
            <p>{blog.desc}</p>
            <span className="read-more">Read more →</span>
          </div>
        ))}
      </div>
    </section>
  );
}
