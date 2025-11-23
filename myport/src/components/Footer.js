import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bar" />
      <div className="footer-content">
        <div className="footer-socials">
          <a href="https://facebook.com" aria-label="Facebook" className="footer-icon fb" target="_blank" rel="noopener noreferrer" />
          <a href="https://instagram.com" aria-label="Instagram" className="footer-icon ig" target="_blank" rel="noopener noreferrer" />
          <a href="https://discord.com" aria-label="Discord" className="footer-icon discord" target="_blank" rel="noopener noreferrer" />
        </div>
        <p>
          © {new Date().getFullYear()} Vince Quijano. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
