import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {

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
    <footer className="footer">

      <div className="container">

        <div className="row">

          {/* Shop Info */}

          <div className="col-lg-4 col-md-6 mb-4">

            <h3 className="footer-logo">
              💊 Raghu Pharmacy
            </h3>

            <p className="footer-text">
              Trusted Pharmacy for Human Medicines,
              Veterinary Medicines, Pet Food,
              Pet Care Products and Door Delivery.
            </p>

            <a
              href={`https://wa.me/917981881638?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              📲 WhatsApp Us
            </a>

          </div>

          {/* Quick Links */}

          <div className="col-lg-3 col-md-6 mb-4">

            <h5 className="footer-heading">
              Quick Links
            </h5>

            <ul className="footer-links">

              <li>
                <Link to="/">🏠 Home</Link>
              </li>

              <li>
                <Link to="/catagories">💊 Categories</Link>
              </li>

              <li>
                <Link to="/about-raghu">👨‍⚕️ About Raghu</Link>
              </li>

              <li>
                <Link to="/about">⭐ Why Choose Us</Link>
              </li>

              <li>
                <Link to="/review">💬 Reviews</Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div className="col-lg-5 col-md-12">

            <h5 className="footer-heading">
              Contact Details
            </h5>

            <p>📍 Raghu Pharmacy</p>

            <p>📞 +91 79818 81638</p>

            <p>📧 raghupharmacy@gmail.com</p>

            <p>🕘 Monday - Sunday : 8:00 AM - 10:00 PM</p>

            <p>
              🚚 Free Delivery within <strong>500 meters</strong>
            </p>

            <p>
              📍 Up to <strong>1 KM</strong> - ₹10 Delivery Charge
            </p>

          </div>

        </div>

        <hr />

        <div className="copyright">
          © 2026 Raghu Pharmacy | Designed & Developed by  Mohan B
        </div>

      </div>

    </footer>
  );
}