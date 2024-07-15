import React, { useState } from "react";
import './App.css';
import Header from './components/Header';
import Image from './components/Image';
import Card from './components/Card';
import Button from './components/Button';

function App() {
  const [contentIndex, setContentIndex] = useState(0);

  const contentList = [
    "Eng. Rayan Bawazeer is a Software Engineering student who is passionate about learning and discovering new technologies, programming languages, and frameworks in the field of front-end development for web pages and mobile applications. I begin development by conceiving the idea, then devising a software solution, and finally commencing the build process using the latest technologies.",
    "I am a proactive Software Engineer skilled in front-end web development and app creation. At Amnoon Company, I designed and maintained their website, integrating new features to improve user experience and developing a specialized site to manage invoices. I also successfully planned and executed software projects to address business challenges. At Innovative Foods Co., I developed a Power App for tablets that streamlined invoice export to professional format, ensuring efficient data management across branches. My experience demonstrates my ability to deliver innovative solutions that enhance operational efficiency and user satisfaction.",
    "Proficient in a diverse range of programming languages including HTML/CSS, JavaScript, PHP, and Java, I specialize in frontend development using React, and React Native frameworks. Skilled in MySQL databases, I also have extensive experience with version control systems such as Git and GitHub.",
    "1. Amnoon Website: The Amnoon Website enhances user interaction and streamlines business operations with its dynamic platform and responsive design. 2. Amnoon Invoice Management: A robust web application for efficient invoice collection and processing, ensuring accurate financial records management. 3. Invoice Uploader Power App: Revolutionizing invoice handling by seamlessly uploading and organizing invoices across branches, enhancing administrative efficiency."
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
