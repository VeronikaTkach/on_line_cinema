import React, { useState } from "react";
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
    <div className="text-smoke-white text-center lg:text-sm text-xs font-light">
      <p className="xl:mb-7 lg:mb-5 md:mb-3 mb-2">
        2020 © Kinoarea. Все права защищены
      </p>
      <a
        className="relative cursor-pointer after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[1px] after:bg-current after:transition-all hover:after:bg-opacity-60"
        onClick={handleClick}
      >
        {text}
      </a>
      {isPopupOpen && <Popup onClose={handleClose} />}
    </div>
  );
};
