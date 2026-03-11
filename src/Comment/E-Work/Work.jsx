import React, { useRef } from "react";
import "./Work.css";

export default function Work() {
  const sliderRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const workData = [
    {
      image: "/Artitecture.png",
      title: "GREENFIELD — 2025 — Dehradun",
    },
    {
      image: "/Artitecture.png",
      title: "GREENFIELD — 2025 — Dehradun",
    },
    {
      image: "/Artitecture.png",
      title: "GREENFIELD — 2025 — Dehradun",
    },
    {
      image: "/Artitecture.png",
      title: "GREENFIELD — 2025 — Dehradun",
    },
  ];

  const startDrag = (x) => {
    isDown.current = true;
    sliderRef.current.classList.add("dragging");
    startX.current = x;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const moveDrag = (x) => {
    if (!isDown.current) return;
    const walk = (startX.current - x) * 1.2;
    sliderRef.current.scrollLeft = scrollLeft.current + walk;
  };

  const stopDrag = () => {
    isDown.current = false;
    sliderRef.current.classList.remove("dragging");
  };

  return (
    <section className="work-section">
      {/* HEADER */}
      <div className="work-header">
        <p className="work-label">• GET TO KNOW OUR WORK</p>
        <div className="work-title-row">
          <h2>Delivering thoughtfully designed spaces</h2>
          <a href="#">Explore All Blogs →</a>
        </div>
      </div>

      {/* SLIDER */}
      <div
        ref={sliderRef}
        className="work-slider"
        onMouseDown={(e) => startDrag(e.pageX)}
        onMouseMove={(e) => moveDrag(e.pageX)}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchStart={(e) => startDrag(e.touches[0].pageX)}
        onTouchMove={(e) => moveDrag(e.touches[0].pageX)}
        onTouchEnd={stopDrag}
      >
        {workData.map((item, i) => (
          <div className="work-card" key={i}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}