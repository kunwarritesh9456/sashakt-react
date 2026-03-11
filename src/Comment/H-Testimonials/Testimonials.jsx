import "./Testimonials.css";

const testimonials = [
  {
    text: `I worked with Sashakt Architect for my home project, and the experience was outstanding.
They really listened to my ideas and delivered a design that exceeded my expectations.`,
    img: "https://i.pravatar.cc/100?img=12",
  },
  {
    text: `I worked with Sashakt Architect for my home project, and the experience was outstanding.
They really listened to my ideas and delivered a design that exceeded my expectations.`,
    img: "https://i.pravatar.cc/100?img=11",
  },
  {
    text: `My experience is very good with Sashakt Architect.
He is everytime available for us thanks a lot.`,
    img: "https://i.pravatar.cc/100?img=10",
  },
  {
    text: `I worked with Sashakt Architect for my home project, and the experience was outstanding.
They really listened to my ideas and delivered a design that exceeded my expectations.`,
    img: "https://i.pravatar.cc/100?img=9",
  },
  {
    text: `My experience is very good with Sashakt Architect.
He is everytime available for us thanks a lot.`,
    img: "https://i.pravatar.cc/100?img=8",
  },
  {
    text: `I worked with Sashakt Architect for my home project, and the experience was outstanding.
They really listened to my ideas and delivered a design that exceeded my expectations.`,
    img: "https://i.pravatar.cc/100?img=7",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <p className="section-tag">• TESTIMONIALS</p>
      <h2 className="section-title">What Our Customer Say</h2>

      {/* Horizontal Scroll Container */}
      <div className="testimonials-scroll">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">★★★★★</div>
            <p className="review">{item.text}</p>

            <div className="client">
              <img src={item.img} alt="client" />
              <div className="client-info">
                <h4>Ravish</h4>
                <span>Client</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;