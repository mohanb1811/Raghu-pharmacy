import "./About.css";

const features = [
  {
    icon: "✔",
    title: "Genuine Medicines",
    desc: "100% authentic and quality medicines from trusted brands.",
  },
  {
    icon: "🐄",
    title: "Veterinary Medicines",
    desc: "Complete healthcare products for cattle, dogs, cats and pets.",
  },
  {
    icon: "💰",
    title: "Best Price",
    desc: "Affordable prices with the best value for every customer.",
  },
  {
    icon: "🤝",
    title: "Friendly Support",
    desc: "Our team is always ready to help you choose the right products.",
  },
  {
    icon: "📲",
    title: "WhatsApp Ordering",
    desc: "Simply send your order on WhatsApp and we'll take care of the rest.",
  },
  {
    icon: "🚚",
    title: "Fast Delivery",
    desc: "Quick and reliable delivery to your doorstep (where available).",
  },
];

export default function About() {
  return (
    <section className="about-section">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="about-title">
            Why Choose <span>Raghu Pharmacy?</span>
          </h2>

          <p className="about-subtitle">
            Trusted Medicines • Veterinary Care • Pet Essentials • Friendly Service
          </p>
        </div>

        <div className="row g-4">

          {features.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>

              <div className="about-card">

                <div className="about-icon">
                  {item.icon}
                </div>

                <h4>{item.title}</h4>

                <p>{item.desc}</p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}