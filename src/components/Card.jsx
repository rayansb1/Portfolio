import React from "react";
import './Card.css';
import AmnoonImageCard from './AmnoonImageCard.jpg';
import CalculatorImageCard from './CalculatorImageCard.jpg';
import WeatherImageCard from './WeatherImageCard.jpg';
import InnovativefoodImageCard from './InnovativefoodImageCard.jpg';

function Card() {
  return (
    <div className="card-container">
      <div className="card">
        <img src={AmnoonImageCard} alt="Image" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">Amnoon Website</h3>
          <a href="http://www.amnoon-sa.com" className="card-link">View more</a>
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
        <img src={InnovativefoodImageCard} alt="Image" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">Invoice Uploader Power App</h3>
          <a href="#" className="card-link">View More</a>
        </div>
      </div>
      <div className="card">
        <img src={WeatherImageCard} alt="Image" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">Weather website</h3>
          <a href="https://github.com/rayansb1/Weather" className="card-link">View More</a>
        </div>
      </div>
      <div className="card">
        <img src={CalculatorImageCard} alt="Image" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">Calculator</h3>
          <a href="https://github.com/rayansb1/CalculatorJS" className="card-link">View More</a>
        </div>
      </div>
    </div>
  );
}

export default Card;