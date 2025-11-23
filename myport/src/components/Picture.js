import React from 'react';
import profilePic from '../Image.jpg'; // Make sure the file is src/Image.jpg
import '../styles/Picture.css';

const Picture = () => (
  <div className="profile-container">
    <img src={profilePic} alt="Profile" className="profile-pic" />
  </div>
);

export default Picture;