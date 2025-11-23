import React from 'react';
import '../styles/Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Follow Me</h2>
      <form>
        <div className="social-input">
          <span className="icon fb" />
          <input type="text" placeholder="Your Facebook username or profile URL" />
        </div>
        <div className="social-input">
          <span className="icon ig" />
          <input type="text" placeholder="Your Instagram username or profile URL" />
        </div>
        <div className="social-input">
          <span className="icon discord" />
          <input type="text" placeholder="Your Discord username (e.g., user#1234)" />
        </div>
      </form>
    </section>
  );
}
