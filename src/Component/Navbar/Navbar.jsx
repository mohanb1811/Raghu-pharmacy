import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {

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
    <nav className="navbar navbar-expand-lg shadow-sm sticky-top navbar-custom">
      <div className="container">

        <Link className="navbar-brand fw-bold text-white fs-3" to="/">
          💊 Raghu Pharmacy
        </Link>

        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/catagories">
                Categories
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/about-raghu">
                About Raghu
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                Why Choose Us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/review">
                Reviews
              </Link>
            </li>

            <li className="nav-item ms-3">
              <a
                href={`https://wa.me/917981881638?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn whatsapp-btn"
              >
                📲 WhatsApp Order
              </a>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}