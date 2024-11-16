import React from "react";
import './Card.css';
import InnovativefoodImageCard from './InnovativefoodImageCard.jpg';
import AmnoonImageCard from './AmnoonImageCard.jpeg';
import Pomonote from './Pomonote.png';
import WeatherImageCard from './WeatherImageCard.png';

function Card() {
  return (
    <div className="card-container">
      <div className="card">
        <img src={InnovativefoodImageCard} alt="Image" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">Invoice Uploader Power App</h3>
          <a href="#" className="card-link">View More</a>
        </div>
      </div>
      <div className="card">
        <img src={AmnoonImageCard} alt="Image" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">Amnoon Invoice Management</h3>
          <a href="#" className="card-link">View More</a>
        </div>
      </div>
      <div className="card">
        <img src={AmnoonImageCard} alt="Image" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">Amnoon Website</h3>
          <a href="http://www.amnoon-sa.com" className="card-link">View more</a>
        </div>
      </div>
      <div className="card">
        <img src={WeatherImageCard} alt="Image" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">Weather website</h3>
          <a href="https://weatherwebsiteapplication.netlify.app" className="card-link">View More</a>
        </div>
      </div>
      <div className="card">
        <img src={Pomonote} alt="Image" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">Pomonote application</h3>
          <a href="https://github.com/rayansb1/Pomonote" className="card-link">View More</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
