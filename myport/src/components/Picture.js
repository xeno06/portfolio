import React from 'react';
import profilePic from '../Image.jpg'; // If Picture.js is in src/components
import '../styles/Picture.css';

const Picture = () => (
  <div className="profile-container">
    <img src={profilePic} alt="Profile" className="profile-pic" />
  </div>
);

export default Picture;
