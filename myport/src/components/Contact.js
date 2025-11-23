import React from 'react';
import '../styles/Contact.css';

// SVG logos – you can use more detailed SVGs if you want
const FBLogo = () => (
  <svg height="30" width="30" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#4267B2"/><path fill="#fff" d="M22 11h-4V9a2 2 0 0 1 2-2h2V4h-3a5 5 0 0 0-5 5v2H8v4h4v10h4v-10h3l1-4z"/></svg>
);

const IGLogo = () => (
  <svg height="30" width="30" viewBox="0 0 32 32"><radialGradient id="igGrad" cx="16" cy="16" r="16" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#fdc468"/><stop offset="100%" stopColor="#df4996"/></radialGradient>
  <circle cx="16" cy="16" r="16" fill="url(#igGrad)"/><rect x="9" y="9" width="14" height="14" rx="4" fill="#fff" opacity="0.4"/><circle cx="16" cy="16" r="4.5" fill="#fff"/><circle cx="22" cy="10" r="1" fill="#fff"/></svg>
);

const DiscordLogo = () => (
  <svg height="30" width="30" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#5865F2"/><path fill="#fff" d="M22 21s-1.1-1.3-2-1c-1 .3-1.9.4-2.9.4s-1.8-.1-2.9-.4c-.9-.3-2 1-2 1s-3-1.4-3-6v-1c0-1 .7-1.6 1.6-2C9.2 10.8 11 10 12.2 9.5c.6-.4 1.3-.5 2-.5s1.4.1 2 .5c1.2.5 3 .8 3.2 1.5.9.4 1.6 1 1.6 2v1c0 4.6-3 6-3 6z"/></svg>
);

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Follow Me</h2>
      <form>
        <div className="social-input">
          <FBLogo />
          <input type="text" placeholder="Your Facebook username or profile URL" />
        </div>
        <div className="social-input">
          <IGLogo />
          <input type="text" placeholder="Your Instagram username or profile URL" />
        </div>
        <div className="social-input">
          <DiscordLogo />
          <input type="text" placeholder="Your Discord username (e.g., user#1234)" />
        </div>
      </form>
    </section>
  );
}
