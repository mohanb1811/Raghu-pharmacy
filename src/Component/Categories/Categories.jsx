import "./Categories.css";

const categories = [
  {
    icon: "💊",
    title: "Human Medicines",
  },
  {
    icon: "💉",
    title: "Injections",
  },
  {
    icon: "🐄",
    title: "Veterinary Medicines",
  },
  {
    icon: "🐶",
    title: "Pet Food",
  },
  
  {
    icon: "🍫",
    title: "Chocolates",
  },

  {
    icon: "🪥",
    title: "Tooth Paste",
  },
  {
    icon: "🧼",
    title: "Soap",
  },
  {
    icon: "👶",
    title: "Diapers",
  },
];

export default function Categories() {
  return (
    <section className="category-section">

      <div className="container">

        <div className="text-center mb-5">
          <h2 className="category-heading">
            Shop By Categories
          </h2>

          <p className="text-muted">
            Everything Your Family & Pets Need Under One Roof
          </p>
        </div>

        <div className="row g-4">

          {categories.map((item, index) => (

            <div className="col-lg-3 col-md-4 col-sm-6" key={index}>

              <div className="category-card">

                <div className="category-icon">
                  {item.icon}
                </div>

                <h5>{item.title}</h5>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}