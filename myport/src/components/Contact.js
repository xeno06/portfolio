import React from 'react';
import '../styles/Contact.css';

const socials = [
  {
    name: 'Facebook',
    link: 'https://facebook.com/YOUR_USERNAME', // change to real link
    iconClass: 'fb',
    id: 'facebook',
    username: 'vince.quijano.58'
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com/YOUR_USERNAME', // change to real link
    iconClass: 'ig',
    id: 'instagram',
    username: 'donxenooo'
  },
  {
    name: 'Discord',
    link: 'https://discord.com/users/YOUR_ID', // use Discord user link or invite
    iconClass: 'discord',
    id: 'discord',
    username: 'xenooo6197'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Follow Me</h2>
      <div className="socials-list">
        {socials.map(social => (
          <a
            key={social.id}
            className="social-card"
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={`icon ${social.iconClass}`} />
            <div className="social-info">
              <h3>{social.name}</h3>
              <span className="username">{social.username}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
