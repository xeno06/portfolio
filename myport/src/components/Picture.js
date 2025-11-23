import React from 'react';
import profilePic from '../assets/profile.jpg'; // replace with your image file

import '../styles/Picture.css';

const Picture = () => (
  <div className="profile-container">
    <img src={profilePic} alt="Profile" className="profile-pic" />
    <h2 className="profile-name">Your Name</h2>
    <p className="profile-role">Web Developer & Designer</p>
  </div>
);

export default Picture;
