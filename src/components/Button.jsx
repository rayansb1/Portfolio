import React from 'react';
import './Button.css'; // Create this CSS file for styling

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

  return (
    <div className="buttons-container">
      <button className="whatsapp" onClick={openWhatsAppChat}>WhatsApp</button>
      <button className="email" onClick={openEmailClient}>Email</button>
      <button className="linkedin" onClick={openLinkedIn}>LinkedIn</button>
      <button className="github" onClick={openGitHub}>GitHub</button>
    </div>
  );
};

export default Buttons;
