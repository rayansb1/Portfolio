import React, { useState } from "react";
import './App.css';
import Header from './components/Header';
import Image from './components/Image';
import Card from './components/Card';
import Button from './components/Button';

function App() {
  const [contentIndex, setContentIndex] = useState(0);

  const contentList = [
    "A software engineering student passionate about developing new software projects and creating innovative solutions for manual tasks, striving to transform ideas into practical applications that enhance everyday life.",
    "Software Engineer at Amnoon Security Consulting: Improved websites and developed invoice solutions. Interned at Innovative Foods: Built a Power Apps tool for managing invoices.",
    "Skilled in HTML, CSS, JavaScript, PHP, Java, and Dart, with expertise in frontend development using React and Flutter. Experienced in Git and GitHub for version control.",
  ];

  const handleButtonClick = (index) => {
    setContentIndex(index);
  };

  return (
    <div className="App">
      <Header onButtonClick={handleButtonClick} />
      <Image content={contentList[contentIndex]} />
      <Card />
      <Button/>
    </div>
  );
}

export default App;
