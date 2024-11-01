import React, { useState } from "react";
import "./PrivacyPolicy.css";
import { Popup } from "../Popup/Popup";

interface PrivacyPolicyProps {
  text: string;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ text }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  const handleClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="privacy-policy">
      <p className="privacy-policy__text">
        2020 © Kinoarea. Все права защищены
      </p>
      <a className=" privacy-policy__link" onClick={handleClick}>
        {text}
      </a>
      {isPopupOpen && <Popup onClose={handleClose} />}
    </div>
  );
};
