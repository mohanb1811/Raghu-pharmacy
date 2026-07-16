import About from "../About/About";
import Categories from "../Categories/Categories";
import Delivery from "../Delivery/Delivery";
import Layout from "../Layout";
import Raghu from "../Raghu/Raghu";
import Reviews from "../Reviews/Reviews";
import "./HomePages.css";
import pharmacist from "../../assets/tablets.jpg";
import veterinary from "../../assets/animal.webp";
import petcare from "../../assets/diaper.jpg";

function HomePages() {

  const whatsappMessage = `💊 Welcome to Raghu Pharmacy

🙏 Thank you for contacting us.

Please let us know what you need.

💊 Human Medicines
💉 Injections
🐄 Veterinary Medicines
🦴 Dog Biscuits
🍫 Chocalates
🪥 Tooth Paste
🧼 Soap
👶 Diapers

────────────────────────

🇬🇧 English:
Hello! 👋
How can we help you today?
Please tell us the medicine or product you need.

────────────────────────

🇮🇳 தமிழ்:
வணக்கம்! 🙏
ரகு பார்மசியை தொடர்பு கொண்டதற்கு நன்றி.
உங்களுக்கு தேவையான மருந்து அல்லது பொருளின் பெயரை தெரிவிக்கவும்.
நாங்கள் உங்களுக்கு உதவ மகிழ்ச்சி அடைகிறோம்.

────────────────────────

🇮🇳 తెలుగు:
నమస్కారం! 🙏
రఘు ఫార్మసీని సంప్రదించినందుకు ధన్యవాదాలు.
మీకు కావలసిన మందు లేదా పెట్ ప్రోడక్ట్ పేరు తెలియజేయండి.
మేము మీకు సహాయం చేయడానికి సంతోషిస్తున్నాము.

❤️ Thank You
Raghu Pharmacy`;

  return (
    <Layout>

      <section className="hero-section">

        <div className="container">

          <div className="row align-items-center">

            {/* Left Content */}

            <div className="col-lg-6">

              <h1 className="hero-title">
                Welcome to <span>Raghu Pharmacy</span>
              </h1>

              <p className="hero-text">
                Human Medicines • Veterinary Medicines • Pet Care •
                Dog Food • Cat Food • Injections • Pet Accessories
              </p>

              <a
                href={`https://wa.me/917981881638?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn order-btn"
              >
                Order on WhatsApp
              </a>

            </div>

            {/* Right Carousel */}

            <div className="col-lg-6">

              <div
                id="heroSlider"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000"
              >
                <div className="carousel-inner">

                  <div className="carousel-item active">
                    <img src={pharmacist} className="d-block w-100 slider-img" alt="Pharmacist" />
                    <div className="carousel-caption">
                      <h2>💊 Genuine Human Medicines</h2>
                      <p>Prescription Medicines • OTC Medicines • Health Care</p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <img src={veterinary} className="d-block w-100 slider-img" alt="Veterinary" />
                    <div className="carousel-caption">
                      <h2>🐄 Veterinary Medicines</h2>
                      <p>Cow • Dog • Cat • Goat • Vaccines • Injections</p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <img src={petcare} className="d-block w-100 slider-img" alt="Pet Care" />
                    
                  </div>

                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#heroSlider"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>

                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#heroSlider"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Delivery />
      <Categories />
      <Raghu />
      <About />
      <Reviews />

    </Layout>
  );
}

export default HomePages;