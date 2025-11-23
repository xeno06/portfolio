import React from 'react';
import '../styles/Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        <div className="contact-icon">
          <span role="img" aria-label="pin">📍</span>
        </div>
        <div>
          <h3>Vince Quijano</h3>
          <p>Based in Manila, Philippines</p>
          <p>Timezone: GMT+8</p>
          <p>Available for remote work worldwide!</p>
        </div>
      </div>
    </section>
  );
}
