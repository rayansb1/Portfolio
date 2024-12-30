import React from "react";
import '../styles/Card.css';
import InnovativefoodImageCard from '../assets/InnovativefoodImageCard.jpg';
import AmnoonImageCard from '../assets/AmnoonImageCard.jpeg';
import Pomonote from '../assets/Pomonote.png';

function Card() {
  return (
    <div className="card-container">
      <div className="card">
        <img src={InnovativefoodImageCard} alt="Innovative Food Power App" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">Invoice Uploader Power App</h3>
          <p className="card-description">A PowerApp application that simplifies invoice management for branches by enabling them to upload invoices to a dedicated SharePoint Library folder. It also provides easy access to previously uploaded invoices, ensuring efficient organization and seamless retrieval of branch-specific records.</p>
          <a href="#" className="card-link">View More</a>
        </div>
      </div>
      <div className="card">
        <img src={AmnoonImageCard} alt="Amnoon Invoice Management" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">Amnoon Invoice Management</h3>
          <p className="card-description">A web application designed to streamline the process of collecting and managing purchase invoices. Users can upload invoice details and images on the first page, while accountants can verify the data on the second page. The application ensures accuracy by allowing accountants to approve valid invoices or reject those that do not meet requirements, creating an efficient and reliable invoice management system.</p>
          <a href="#" className="card-link">View More</a>
        </div>
      </div>
      <div className="card">
        <img src={AmnoonImageCard} alt="Amnoon Website" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">Amnoon Website</h3>
          <p className="card-description">Official website for Amnoon, showcasing its services.</p>
          <a href="http://www.amnoon-sa.com" className="card-link">View More</a>
        </div>
      </div>
      <div className="card">
        <img src={Pomonote} alt="Pomonote Application" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">Pomonote Application</h3>
          <p className="card-description">Pomonote is a productivity-focused mobile application with three core sections: Home, Notification, and Timer pages. The Home Page offers intuitive navigation to other features. The Notification Page lets users schedule reminders with notes for specific dates. The Timer Page employs the Pomodoro technique, running a 25-minute work timer followed by a notification for a 5-minute break, promoting focus and effective time management.</p>
          <a href="https://github.com/rayansb1/Pomonote" className="card-link">View More</a>
        </div>
      </div>
    </div>
  );
}

export default Card;