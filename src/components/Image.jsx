import React from "react";
import '../styles/Image.css';
import myImage from '../assets/myImage.jpg';
function Image({ content }) {
  return (
    <div className="container">
      <div className="big-circle">
        <img src={myImage} alt="My Image" />
      </div>
      <div className="content">
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Image;
