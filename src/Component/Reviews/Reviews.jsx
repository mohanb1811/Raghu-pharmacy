import "./Reviews.css";

const reviews = [
  {
    name: "Arun",
    comment: "⭐⭐⭐⭐⭐ Excellent service and genuine medicines.",
  },
  {
    name: "Priya",
    comment: "⭐⭐⭐⭐⭐ Friendly staff and quick WhatsApp support Super Raghu.",
  },
  {
    name: "Karthik",
    comment: "⭐⭐⭐⭐⭐ Best veterinary medicines Thank You Raghu.",
  },
  {
    name: "Lokesh",
    comment: "⭐⭐⭐⭐⭐ Fast delivery and affordable prices.",
  },
  {
    name: "Rajesh",
    comment: "⭐⭐⭐⭐⭐ Highly recommended pharmacy.",
  },
];

export default function Reviews() {
  return (
    <section className="review-section">

      <h2 className="review-title">
        Customer Reviews ❤️
      </h2>

      <div className="review-slider">

        <div className="review-track">

          {[...reviews, ...reviews].map((item, index) => (

            <div className="review-card" key={index}>

              <h5>{item.name}</h5>

              <p>{item.comment}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}