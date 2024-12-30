import React from 'react';
import '../styles/Button.css'; // Make sure to include styles for the new button

function Buttons() {
  const openWhatsAppChat = () => {
    window.open(`https://wa.me/+966547702270`, '_blank');
  };

  const openEmailClient = () => {
    window.open(`mailto:rayanbawazeer1@hotmail.com`, '_blank');
  };

  const openLinkedIn = () => {
    window.open(`https://www.linkedin.com/in/rayansb1/`, '_blank');
  };

  const openGitHub = () => {
    window.open(`https://github.com/rayansb1`, '_blank');
  };

  const openResume = () => {
    window.open(`/files/Resume.pdf`, '_blank'); // Adjust the path if needed
  };

  return (
    <div className="buttons-container">
      <button className="whatsapp" onClick={openWhatsAppChat}>WhatsApp</button>
      <button className="email" onClick={openEmailClient}>Email</button>
      <button className="linkedin" onClick={openLinkedIn}>LinkedIn</button>
      <button className="github" onClick={openGitHub}>GitHub</button>
      <button className="resume" onClick={openResume}>Resume</button>
    </div>
  );
}

export default Buttons;
