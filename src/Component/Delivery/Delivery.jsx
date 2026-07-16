import "./Delivery.css";

export default function Delivery() {

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
    <section className="delivery-section">

      <div className="container">

        <div className="delivery-card">

          <div className="row align-items-center">

            <div className="col-lg-8">

              <h2>🚚 Fast Door Delivery Available</h2>

              <p>
                💬 Order easily through <strong>WhatsApp</strong>.
                You can send a text message, voice message, or medicine
                prescription photo. We will confirm your order and deliver
                it quickly.
              </p>

              <div className="delivery-info">

                <span>
                  🆓 FREE Delivery within <strong>500 meters</strong>
                </span>

                <span>
                  📍 Up to <strong>1 KM</strong> - Only <strong>₹10</strong> Delivery Charge
                </span>

              </div>

            </div>

            <div className="col-lg-4 text-center">

              <a
                href={`https://wa.me/917981881638?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                className="delivery-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                📲 Order Now
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}