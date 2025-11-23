import React from 'react';
import '../styles/Contact.css';

const socials = [
  {
    name: 'Facebook',
    placeholder: 'Your Facebook username or profile URL',
    iconClass: 'fb',
    id: 'facebook',
  },
  {
    name: 'Instagram',
    placeholder: 'Your Instagram username or profile URL',
    iconClass: 'ig',
    id: 'instagram',
  },
  {
    name: 'Discord',
    placeholder: 'Your Discord username (e.g., user#1234)',
    iconClass: 'discord',
    id: 'discord',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Follow Me</h2>
      <div className="socials-list">
        {socials.map(social => (
          <div key={social.id} className="social-card">
            {/* The icon stays */}
            <span className={`icon ${social.iconClass}`} />
            <div className="social-info">
              <h3>{social.name}</h3>
              <input
                type="text"
                placeholder={social.placeholder}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
