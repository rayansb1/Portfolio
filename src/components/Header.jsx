import React from "react";
import './Header.css';

function Header({ onButtonClick }) {
  const handleButtonClick = (index) => {
    onButtonClick(index);
  };

  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><button onClick={() => handleButtonClick(0)}>About Rayan</button></li>
          <li><button onClick={() => handleButtonClick(1)}>Experience</button></li>
          <li><button onClick={() => handleButtonClick(2)}>Programming Languages</button></li>
          <li><button onClick={() => handleButtonClick(3)}>Projects</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
